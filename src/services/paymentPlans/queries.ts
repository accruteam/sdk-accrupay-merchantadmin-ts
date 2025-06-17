import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY = gql(`
  query UserMerchantPaymentPlans(
    $merchantId: String,
    $id: String,
    $providerCode: String,
    $providerStatus: PAYMENT_PLAN_STATUS,
    $currency: CURRENCY,
    $transactionProviderId: String,
    $transactionProvider: TRANSACTION_PROVIDER,
    $paymentMethodId: String,
    $paymentMethod: PAYMENT_METHOD,
    $templateId: String,
    $merchantInternalCustomerCode: String,
    $merchantInternalPaymentPlanCode: String,
    $hasProviderError: Boolean,
    $ended: Boolean,
    $started: Boolean,
    $canceled: Boolean,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userMerchantPaymentPlans(
      merchantId: $merchantId,
      id: $id,
      providerCode: $providerCode,
      providerStatus: $providerStatus,
      currency: $currency,
      transactionProviderId: $transactionProviderId,
      transactionProvider: $transactionProvider,
      paymentMethodId: $paymentMethodId,
      paymentMethod: $paymentMethod,
      templateId: $templateId,
      merchantInternalCustomerCode: $merchantInternalCustomerCode,
      merchantInternalPaymentPlanCode: $merchantInternalPaymentPlanCode,
      hasProviderError: $hasProviderError,
      ended: $ended,
      started: $started,
      canceled: $canceled,

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
          ...MerchantPaymentPlanFragment
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

export const MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY = gql(`
  query UserMerchantPaymentPlan($merchantId: String, $merchantPaymentPlanId: String!) {
    userMerchantPaymentPlan(merchantId: $merchantId, merchantPaymentPlanId: $merchantPaymentPlanId) {
      ...MerchantPaymentPlanFragment
    }
  }
`);

export const MERCHANT_PAYMENT_PLANS_SYNC_ONE_MUTATION = gql(`
  mutation UserMerchantPaymentPlanSyncOne(
    $merchantId: String,
    $merchantTransactionProviderId: String!,
    $providerCode: String!
  ) {
    userMerchantPaymentPlanSyncOne(
      merchantId: $merchantId,
      merchantTransactionProviderId: $merchantTransactionProviderId,
      providerCode: $providerCode
    ) {
      ...MerchantPaymentPlanFragment
    }
  }
`);
