import { gql } from '@api/gql';

export const USERS_GET_CURRENT_QUERY = gql(`
  query User {
    user {
      ...UserFragment
      merchants {
        ...MerchantUserFragment
      }
    }
  }
`);
