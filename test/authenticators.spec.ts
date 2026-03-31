import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ApiKeys } from '@services/apiKeys';
import { Authenticators } from '@services/authenticators';
import { IntegrationLogs } from '@services/integrationLogs';
import {
  AUTHENTICATORS_BACKUP_CODE_GENERATE_MUTATION,
  AUTHENTICATORS_BACKUP_CODE_REGENERATE_MUTATION,
  AUTHENTICATORS_REVOKE_MUTATION,
  AUTHENTICATORS_TOTP_REPLACEMENT_START_MUTATION,
} from '@services/authenticators/queries';
import {
  API_KEYS_CREATE_MUTATION,
  API_KEYS_DELETE_MUTATION,
  API_KEYS_SHOW_SECRET_MUTATION,
} from '@services/apiKeys/queries';
import { INTEGRATION_LOGS_AUTHENTICATOR_SESSION_CREATE_MUTATION } from '@services/integrationLogs/queries';
import { AUTHENTICATOR_TYPE } from '@api/gql/graphql';

describe('Authenticator-related services', () => {
  const query = vi.fn();
  const mutate = vi.fn();
  const context = {
    apolloClient: {
      query,
      mutate,
    },
  } as any;

  beforeEach(() => {
    query.mockReset();
    mutate.mockReset();
  });

  it('forwards revoke and totp replacementStart with schema-native authenticatorChallenge', async () => {
    const service = new Authenticators(context);
    const authenticator = {
      id: 'auth-1',
      entityId: 'user-1',
      entityType: 'USER',
      type: AUTHENTICATOR_TYPE.TOTP,
      status: 'ACTIVE',
      statusReason: null,
      label: 'Main TOTP',
      lastUsedAt: null,
      createdAt: new Date('2026-03-31T12:00:00.000Z'),
      updatedAt: new Date('2026-03-31T12:05:00.000Z'),
    };

    const revokeVariables = {
      authenticatorId: 'auth-1',
      authenticatorChallenge: {
        type: AUTHENTICATOR_TYPE.TOTP,
        payload: { code: '123456' },
      },
    };
    mutate.mockResolvedValueOnce({
      data: { userAuthenticatorRevoke: authenticator },
    });

    await service.revoke(revokeVariables);

    expect(mutate).toHaveBeenNthCalledWith(1, {
      mutation: AUTHENTICATORS_REVOKE_MUTATION,
      variables: revokeVariables,
    });

    const replacementVariables = {
      authenticatorChallenge: {
        type: AUTHENTICATOR_TYPE.BACKUP_CODE,
        payload: { code: 'backup-123' },
      },
      data: {
        type: AUTHENTICATOR_TYPE.TOTP,
        label: 'New TOTP',
      },
    };
    mutate.mockResolvedValueOnce({
      data: {
        userAuthenticatorTotpReplacementStart: {
          replacementId: 'replacement-1',
          entityId: 'user-1',
          entityType: 'USER',
          type: AUTHENTICATOR_TYPE.TOTP,
          label: 'New TOTP',
          payload: { secret: 'test' },
          expiresAt: new Date('2026-03-31T12:10:00.000Z'),
        },
      },
    });

    await service.totp.replacementStart(replacementVariables);

    expect(mutate).toHaveBeenNthCalledWith(2, {
      mutation: AUTHENTICATORS_TOTP_REPLACEMENT_START_MUTATION,
      variables: replacementVariables,
    });
  });

  it('supports backupCode.generate and backupCode.regenerate', async () => {
    const service = new Authenticators(context);
    const backupCodeResult = {
      authenticator: {
        id: 'auth-backup-1',
        entityId: 'user-1',
        entityType: 'USER',
        type: AUTHENTICATOR_TYPE.BACKUP_CODE,
        status: 'ACTIVE',
        statusReason: null,
        label: 'Backup codes',
        lastUsedAt: null,
        createdAt: new Date('2026-03-31T12:00:00.000Z'),
        updatedAt: new Date('2026-03-31T12:05:00.000Z'),
      },
      codes: ['code-1', 'code-2'],
    };

    const generateVariables = {
      data: { label: 'Backup codes' },
    };
    mutate.mockResolvedValueOnce({
      data: { userAuthenticatorBackupCodeGenerate: backupCodeResult },
    });

    const generateResponse =
      await service.backupCode.generate(generateVariables);

    expect(mutate).toHaveBeenNthCalledWith(1, {
      mutation: AUTHENTICATORS_BACKUP_CODE_GENERATE_MUTATION,
      variables: generateVariables,
    });
    expect(generateResponse).toEqual(backupCodeResult);

    const regenerateVariables = {
      authenticatorChallenge: {
        type: AUTHENTICATOR_TYPE.TOTP,
        payload: { code: '123456' },
      },
      data: { label: 'Backup codes' },
    };
    mutate.mockResolvedValueOnce({
      data: { userAuthenticatorBackupCodeRegenerate: backupCodeResult },
    });

    const regenerateResponse =
      await service.backupCode.regenerate(regenerateVariables);

    expect(mutate).toHaveBeenNthCalledWith(2, {
      mutation: AUTHENTICATORS_BACKUP_CODE_REGENERATE_MUTATION,
      variables: regenerateVariables,
    });
    expect(regenerateResponse.codes).toEqual(['code-1', 'code-2']);
    expect(regenerateResponse.authenticator.type).toBe(
      AUTHENTICATOR_TYPE.BACKUP_CODE,
    );
  });

  it('forwards authenticatorChallenge for api key mutations', async () => {
    const service = new ApiKeys(context);
    const challenge = {
      type: AUTHENTICATOR_TYPE.TOTP,
      payload: { code: '123456' },
    };

    const createVariables = {
      authenticatorChallenge: challenge,
      merchantId: 'merchant-1',
    };
    mutate.mockResolvedValueOnce({
      data: {
        userMerchantApiKeyCreate: {
          id: 'key-1',
          merchantId: 'merchant-1',
          archivedAt: null,
          createdAt: new Date('2026-03-31T12:00:00.000Z'),
          updatedAt: new Date('2026-03-31T12:05:00.000Z'),
        },
      },
    });
    await service.create(createVariables);

    const deleteVariables = {
      authenticatorChallenge: challenge,
      merchantApiKeyId: 'key-1',
      merchantId: 'merchant-1',
    };
    mutate.mockResolvedValueOnce({
      data: { userMerchantApiKeyDelete: true },
    });
    await service.delete(deleteVariables);

    const showSecretVariables = {
      authenticatorChallenge: challenge,
      merchantApiKeyId: 'key-1',
      merchantId: 'merchant-1',
    };
    mutate.mockResolvedValueOnce({
      data: { userMerchantApiKeyShowSecret: 'secret-value' },
    });
    await service.showSecret(showSecretVariables);

    expect(mutate).toHaveBeenNthCalledWith(1, {
      mutation: API_KEYS_CREATE_MUTATION,
      variables: createVariables,
    });
    expect(mutate).toHaveBeenNthCalledWith(2, {
      mutation: API_KEYS_DELETE_MUTATION,
      variables: deleteVariables,
    });
    expect(mutate).toHaveBeenNthCalledWith(3, {
      mutation: API_KEYS_SHOW_SECRET_MUTATION,
      variables: showSecretVariables,
    });
  });

  it('forwards authenticatorChallenge for integration log authenticator sessions', async () => {
    const service = new IntegrationLogs(context);
    const variables = {
      authenticatorChallenge: {
        type: AUTHENTICATOR_TYPE.BACKUP_CODE,
        payload: { code: 'backup-123' },
      },
      merchantId: 'merchant-1',
    };

    mutate.mockResolvedValueOnce({
      data: {
        userMerchantTransactionProviderIntegrationLogAuthenticatorSessionCreate:
          {
            sessionId: 'session-1',
            entityId: 'merchant-user-1',
            entityType: 'MERCHANT',
            featureKey: 'integration-logs',
            createdAt: new Date('2026-03-31T12:00:00.000Z'),
            expiresAt: new Date('2026-03-31T12:05:00.000Z'),
          },
      },
    });

    const response = await service.createAuthenticatorSession(variables);

    expect(mutate).toHaveBeenCalledWith({
      mutation: INTEGRATION_LOGS_AUTHENTICATOR_SESSION_CREATE_MUTATION,
      variables,
    });
    expect(response.sessionId).toBe('session-1');
  });
});
