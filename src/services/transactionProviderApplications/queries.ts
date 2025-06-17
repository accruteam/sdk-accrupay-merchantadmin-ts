import { gql } from '@api/gql';

export const TRANSACTION_PROVIDER_APPLICATIONS_GET_MANY_QUERY = gql(`
  query UserMerchantTransactionProviderApplications(
    $merchantId: String,
    $provider: TRANSACTION_PROVIDER,
    $providerCode: String,
    $status: MERCHANT_TRANSACTION_PROVIDER_APPLICATION_STATUS,
    $started: Boolean,
    $closed: Boolean,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userMerchantTransactionProviderApplications(
      merchantId: $merchantId,
      provider: $provider,
      providerCode: $providerCode,
      status: $status,
      started: $started,
      closed: $closed,

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
          ...MerchantTransactionProviderApplicationFragment
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

export const TRANSACTION_PROVIDER_APPLICATIONS_GET_ONE_QUERY = gql(`
  query UserMerchantTransactionProviderApplication($merchantId: String, $merchantTransactionProviderApplicationId: String!) {
    userMerchantTransactionProviderApplication(
      merchantId: $merchantId,
      merchantTransactionProviderApplicationId: $merchantTransactionProviderApplicationId
    ) {
      ...MerchantTransactionProviderApplicationFragment
    }
  }
`);

export const TRANSACTION_PROVIDER_APPLICATIONS_APPLY_MUTATION = gql(`
  mutation UserMerchantTransactionProviderApplicationApply($merchantId: String, $provider: String!) {
    userMerchantTransactionProviderApplicationApply(
      merchantId: $merchantId,
      provider: $provider
    ) {
      ...MerchantTransactionProviderApplicationFragment
    }
  }
`);

export const TRANSACTION_PROVIDER_APPLICATIONS_CREATE_MUTATION = gql(`
  mutation UserMerchantTransactionProviderCreate($merchantId: String, $data: UserMerchantTransactionProviderCreateSchema!) {
    userMerchantTransactionProviderCreate(
      merchantId: $merchantId,
      data: $data
    ) {
      ...MerchantTransactionProviderFragment
    }
  }
`);

export const TRANSACTION_PROVIDER_APPLICATIONS_GET_CREDENTIALS_SCHEMA_QUERY =
  gql(`
  query UserMerchantTransactionProviderGetCredentialsSchema($merchantId: String, $provider: TRANSACTION_PROVIDER!, $format: TRANSACTION_PROVIDER_CREDENTIALS_SCHEMA_FORMAT!) {
    userMerchantTransactionProviderGetCredentialsSchema(
      merchantId: $merchantId,
      provider: $provider,
      format: $format
    )
  }
`);
