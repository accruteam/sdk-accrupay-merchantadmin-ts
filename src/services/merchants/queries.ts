import { gql } from '@api/gql';

export const MERCHANTS_GET_MANY_QUERY = gql(`
  query UserMerchants(
    $merchantId: String,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userMerchants(
      id: $merchantId,

      skip: $skip,
      take: $take,

      after: $after,
      first: $first,

      before: $before,
      last: $last,

      sorting: $sorting
    ) {
      edges {
        node {
          ...MerchantFragment
        }
        cursor
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

export const MERCHANTS_GET_ONE_QUERY = gql(`
  query UserMerchant($merchantId: String!) {
    userMerchant(merchantId: $merchantId) {
      ...MerchantFragment
    }
  }
`);

export const MERCHANTS_CREATE_MUTATION = gql(`
  mutation UserMerchantCreate($data: MerchantCreateSchema!) {
    userMerchantCreate(data: $data) {
      ...MerchantUserFragment
    }
  }
`);

export const MERCHANTS_UPDATE_MUTATION = gql(`
  mutation UserMerchantUpdate($merchantId: String!, $data: MerchantUpdateSchema!) {
    userMerchantUpdate(merchantId: $merchantId, data: $data) {
      ...MerchantFragment
    }
  }
`);
