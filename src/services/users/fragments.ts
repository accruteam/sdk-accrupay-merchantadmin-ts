import { gql } from '@api/gql';

export const USER_BASE_FRAGMENT = gql(`
  fragment UserBaseFragment on User {
    id
    name
    email
    phone
    createdAt
    updatedAt
    isAdmin
    emailVerificationId
    phoneVerificationId
  }
`);

export const USER_FRAGMENT = gql(`
  fragment UserFragment on User {
    ...UserBaseFragment
    merchants {
      ...MerchantUserFragment
    }
  }
`);
