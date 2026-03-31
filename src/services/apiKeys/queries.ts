import { gql } from '@api/gql';

export const API_KEYS_GET_ONE_QUERY = gql(`
  query UserMerchantApiKey(
    $merchantApiKeyId: String!
    $merchantId: String
  ) {
    userMerchantApiKey(
      merchantApiKeyId: $merchantApiKeyId
      merchantId: $merchantId
    ) {
      ...MerchantApiKeyFragment
    }
  }
`);

export const API_KEYS_GET_ALL_QUERY = gql(`
  query UserMerchantApiKeys(
    $merchantId: String
    $after: ConnectionCursor
    $before: ConnectionCursor
    $first: Int
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
    $id: String
    $includeArchived: Boolean
  ) {
    userMerchantApiKeys(
      merchantId: $merchantId
      after: $after
      before: $before
      first: $first
      last: $last
      skip: $skip
      take: $take
      sorting: $sorting
      id: $id
      includeArchived: $includeArchived
    ) {
      edges {
        cursor
        node {
          ...MerchantApiKeyFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`);

export const API_KEYS_CREATE_MUTATION = gql(`
  mutation UserMerchantApiKeyCreate(
    $authenticatorChallenge: AuthenticatorChallengeSchema!
    $merchantId: String
  ) {
    userMerchantApiKeyCreate(
      authenticatorChallenge: $authenticatorChallenge
      merchantId: $merchantId
    ) {
      ...MerchantApiKeyFragment
    }
  }
`);

export const API_KEYS_DELETE_MUTATION = gql(`
  mutation UserMerchantApiKeyDelete(
    $authenticatorChallenge: AuthenticatorChallengeSchema!
    $merchantApiKeyId: String!
    $merchantId: String
  ) {
    userMerchantApiKeyDelete(
      authenticatorChallenge: $authenticatorChallenge
      merchantApiKeyId: $merchantApiKeyId
      merchantId: $merchantId
    )
  }
`);

export const API_KEYS_SHOW_SECRET_MUTATION = gql(`
  mutation UserMerchantApiKeyShowSecret(
    $authenticatorChallenge: AuthenticatorChallengeSchema!
    $merchantApiKeyId: String!
    $merchantId: String
  ) {
    userMerchantApiKeyShowSecret(
      authenticatorChallenge: $authenticatorChallenge
      merchantApiKeyId: $merchantApiKeyId
      merchantId: $merchantId
    )
  }
`);
