import { gql } from '@api/gql';

export const MERCHANT_FRAGMENT = gql(`
  fragment MerchantFragment on Merchant {
    id
    email
    name
    phone
    status
    publicId
    publicIdUpdatedAt
    createdAt
    updatedAt
  }
`);

export const MERCHANT_USER_FRAGMENT = gql(`
  fragment MerchantUserFragment on MerchantUser {
    id

    isEnabled
    role

    userId
    user {
      ...UserFragment
    }

    merchantId
    merchant {
      ...MerchantFragment
    }

    createdAt
    updatedAt
  }
`);
