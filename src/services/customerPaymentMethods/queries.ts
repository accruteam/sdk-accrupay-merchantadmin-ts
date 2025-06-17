import { gql } from '@api/gql';

export const MERCHANT_CUSTOMER_PAYMENT_METHODS_GET_MANY_QUERY = gql(`
  query UserMerchantCustomerPaymentMethods(
    $merchantId: String,
    $id: String,
    $providerCode: String,
    $methodType: PAYMENT_METHOD,
    $isDefault: Boolean,
    $merchantInternalCustomerCode: String,
    $transactionProviderId: String,
    $transactionProvider: TRANSACTION_PROVIDER,
    $hasProviderError: Boolean,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userMerchantCustomerPaymentMethods(
      merchantId: $merchantId,
      id: $id,
      providerCode: $providerCode,
      methodType: $methodType,
      isDefault: $isDefault,
      merchantInternalCustomerCode: $merchantInternalCustomerCode,
      transactionProviderId: $transactionProviderId,
      transactionProvider: $transactionProvider,
      hasProviderError: $hasProviderError,

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
          ...MerchantCustomerPaymentMethodFragment
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

export const MERCHANT_CUSTOMER_PAYMENT_METHODS_GET_ONE_QUERY = gql(`
  query UserMerchantCustomerPaymentMethod($merchantId: String, $merchantCustomerPaymentMethodId: String!) {
    userMerchantCustomerPaymentMethod(merchantId: $merchantId, merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId) {
      ...MerchantCustomerPaymentMethodFragment
    }
  }
`);

export const MERCHANT_CUSTOMER_PAYMENT_METHODS_SYNC_ONE_MUTATION = gql(`
  mutation UserMerchantCustomerPaymentMethodSyncOne(
    $merchantId: String,
    $merchantInternalCustomerCode: String!,
    $merchantTransactionProviderId: String!,
    $providerCode: String!
  ) {
    userMerchantCustomerPaymentMethodSyncOne(
      merchantId: $merchantId,
      merchantInternalCustomerCode: $merchantInternalCustomerCode,
      merchantTransactionProviderId: $merchantTransactionProviderId,
      providerCode: $providerCode
    ) {
      ...MerchantCustomerPaymentMethodFragment
    }
  }
`);
