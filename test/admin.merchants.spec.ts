import { describe, expect, it, vi, beforeEach } from 'vitest';

import { Admin } from '@services/admin';
import { ADMIN_MERCHANTS_GET_QUERY } from '@services/admin/merchants/adminMerchants.queries';
import { MERCHANT_STATUS } from '@api/gql/graphql';

describe('Admin merchants service', () => {
  const query = vi.fn();
  const context = {
    apolloClient: {
      query,
    },
  } as any;

  beforeEach(() => {
    query.mockReset();
  });

  it('instantiates the merchants sub-service', () => {
    const admin = new Admin(context);

    expect(admin.merchants).toBeDefined();
  });

  it('calls adminMerchants and normalizes the list response', async () => {
    const admin = new Admin(context);
    const variables = {
      name: 'Acme',
      status: MERCHANT_STATUS.ACTIVE,
      take: 10,
    };
    const createdAt = new Date('2026-03-31T12:00:00.000Z');
    const updatedAt = new Date('2026-03-31T12:05:00.000Z');

    query.mockResolvedValue({
      data: {
        adminMerchants: {
          edges: [
            {
              cursor: 'cursor-1',
              node: {
                id: 'merchant-1',
                publicId: 'public-1',
                publicIdUpdatedAt: null,
                name: 'Acme',
                industry: null,
                websiteUrl: null,
                entityType: 'BUSINESS',
                email: 'ops@acme.test',
                emailVerificationId: null,
                phone: '+15551234567',
                phoneVerificationId: null,
                status: MERCHANT_STATUS.ACTIVE,
                addressCountry: 'US',
                addressState: 'CA',
                addressCity: 'San Francisco',
                addressLine1: null,
                addressLine2: null,
                addressPostalCode: '94105',
                legalAddressCountry: null,
                legalAddressState: null,
                legalAddressCity: null,
                legalAddressLine1: null,
                legalAddressLine2: null,
                legalAddressPostalCode: null,
                primaryContactName: null,
                primaryContactEmail: null,
                primaryContactPhone: null,
                timezone: null,
                locale: null,
                archivedAt: null,
                createdAt,
                updatedAt,
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'cursor-1',
            endCursor: 'cursor-1',
          },
          totalCount: 1,
        },
      },
    });

    const response = await admin.merchants.get(variables);

    expect(query).toHaveBeenCalledWith({
      query: ADMIN_MERCHANTS_GET_QUERY,
      variables,
    });
    expect(response.items).toEqual([
      expect.objectContaining({
        id: 'merchant-1',
        name: 'Acme',
        cursor: 'cursor-1',
      }),
    ]);
    expect(response.edges).toHaveLength(1);
    expect(response.totalCount).toBe(1);
  });
});
