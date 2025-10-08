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
    $authenticatorChallengePayload: JSON!
    $merchantId: String
  ) {
    userMerchantApiKeyCreate(
      authenticatorChallengePayload: $authenticatorChallengePayload
      merchantId: $merchantId
    ) {
      ...MerchantApiKeyFragment
    }
  }
`);

export const API_KEYS_DELETE_MUTATION = gql(`
  mutation UserMerchantApiKeyDelete(
    $authenticatorChallengePayload: JSON!
    $merchantApiKeyId: String!
    $merchantId: String
  ) {
    userMerchantApiKeyDelete(
      authenticatorChallengePayload: $authenticatorChallengePayload
      merchantApiKeyId: $merchantApiKeyId
      merchantId: $merchantId
    )
  }
`);

export const API_KEYS_SHOW_SECRET_MUTATION = gql(`
  mutation UserMerchantApiKeyShowSecret(
    $authenticatorChallengePayload: JSON!
    $merchantApiKeyId: String!
    $merchantId: String
  ) {
    userMerchantApiKeyShowSecret(
      authenticatorChallengePayload: $authenticatorChallengePayload
      merchantApiKeyId: $merchantApiKeyId
      merchantId: $merchantId
    )
  }
`);
