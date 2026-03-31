import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserAuthenticatorBackupCodeGenerateMutationVariables,
  UserAuthenticatorBackupCodeRegenerateMutationVariables,
} from '@api/gql/graphql';
import {
  AUTHENTICATORS_BACKUP_CODE_GENERATE_MUTATION,
  AUTHENTICATORS_BACKUP_CODE_REGENERATE_MUTATION,
} from './queries';

class BackupCode {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async generate(
    variables: UserAuthenticatorBackupCodeGenerateMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: AUTHENTICATORS_BACKUP_CODE_GENERATE_MUTATION,
      variables,
    });

    return data!.userAuthenticatorBackupCodeGenerate;
  }

  public async regenerate(
    variables: UserAuthenticatorBackupCodeRegenerateMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: AUTHENTICATORS_BACKUP_CODE_REGENERATE_MUTATION,
      variables,
    });

    return data!.userAuthenticatorBackupCodeRegenerate;
  }
}

export { BackupCode };
