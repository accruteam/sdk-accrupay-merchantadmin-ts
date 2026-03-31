import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AccruPayMerchantAdminClient } from '@package';

const { createApolloClientMock } = vi.hoisted(() => ({
  createApolloClientMock: vi.fn(),
}));

vi.mock('@api/apolloClient', async () => {
  const actual =
    await vi.importActual<typeof import('@api/apolloClient')>(
      '@api/apolloClient',
    );

  return {
    ...actual,
    createApolloClient: createApolloClientMock,
  };
});

describe('AccruPayMerchantAdminClient', () => {
  beforeEach(() => {
    createApolloClientMock.mockReset();
    createApolloClientMock.mockReturnValue({
      query: vi.fn(),
      mutate: vi.fn(),
    });
  });

  it('exposes admin.merchants without changing existing services', () => {
    const client = new AccruPayMerchantAdminClient({
      url: 'http://localhost:3334/graphql',
    });

    expect(client.admin).toBeDefined();
    expect(client.admin.merchants).toBeDefined();
    expect(client.authenticators).toBeDefined();
    expect(client.authenticators.totp).toBeDefined();
    expect(client.authenticators.backupCode).toBeDefined();
    expect(client.merchants).toBeDefined();
    expect(client.users).toBeDefined();
  });
});
