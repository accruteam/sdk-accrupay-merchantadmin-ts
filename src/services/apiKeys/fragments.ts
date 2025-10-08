import { gql } from '@api/gql';

export const MERCHANT_API_KEY_FRAGMENT = gql(`
  fragment MerchantApiKeyFragment on MerchantApiKey {
    id
    merchantId
    archivedAt
    createdAt
    updatedAt
  }
`);
