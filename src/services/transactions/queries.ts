import { gql } from '@api/gql';

export const MERCHANT_TRANSACTIONS_GET_MANY_QUERY = gql(`
  query UserMerchantTransactions(
    $merchantId: String,
    $id: String,
    $code: String,
    $action: TRANSACTION_ACTION,
    $providerCode: String,
    $providerRelatedCode: String,
    $token: String,
    $paymentMethodType: PAYMENT_METHOD,
    $currency: CURRENCY,
    $status: TRANSACTION_STATUS,
    $merchantInternalCustomerCode: String,
    $merchantInternalTransactionCode: String,
    $transactionProviderId: String,
    $paymentMethodId: String,
    $paymentPlanId: String,
    $relatedTransactionId: String,
    $transactionProvider: TRANSACTION_PROVIDER,
    $started: Boolean,
    $succeeded: Boolean,
    $failed: Boolean,
    $canceled: Boolean,
    $reverted: Boolean,
    $disputed: Boolean,
    $hasProviderError: Boolean,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userMerchantTransactions(
      merchantId: $merchantId,
      id: $id,
      code: $code,
      action: $action,
      providerCode: $providerCode,
      providerRelatedCode: $providerRelatedCode,
      token: $token,
      paymentMethodType: $paymentMethodType,
      currency: $currency,
      status: $status,
      merchantInternalCustomerCode: $merchantInternalCustomerCode,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,
      transactionProviderId: $transactionProviderId,
      paymentMethodId: $paymentMethodId,
      paymentPlanId: $paymentPlanId,
      relatedTransactionId: $relatedTransactionId,
      transactionProvider: $transactionProvider,
      started: $started,
      succeeded: $succeeded,
      failed: $failed,
      canceled: $canceled,
      reverted: $reverted,
      disputed: $disputed,
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
          ...MerchantTransactionFragment
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

export const MERCHANT_TRANSACTIONS_GET_ONE_QUERY = gql(`
  query UserMerchantTransaction(
    $merchantId: String,
    $id: String,
    $code: String,
    $merchantInternalTransactionCode: String,
    $providerCode: String,
    $token: String
  ) {
    userMerchantTransaction(
      merchantId: $merchantId,
      id: $id,
      code: $code,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,
      providerCode: $providerCode,
      token: $token
    ) {
      ...MerchantTransactionFragment
    }
  }
`);

export const MERCHANT_TRANSACTIONS_SYNC_ONE_MUTATION = gql(`
  mutation UserMerchantTransactionSyncOne(
    $merchantId: String,
    $id: String,
    $code: String,
    $merchantInternalTransactionCode: String,
    $providerCode: String,
    $token: String
  ) {
    userMerchantTransactionSyncOne(
      merchantId: $merchantId,
      id: $id,
      code: $code,
      merchantInternalTransactionCode: $merchantInternalTransactionCode,
      providerCode: $providerCode,
      token: $token
    ) {
      ...MerchantTransactionFragment
    }
  }
`);
