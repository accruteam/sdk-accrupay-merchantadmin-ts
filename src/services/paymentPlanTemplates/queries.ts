import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY = gql(`
  query UserMerchantPaymentPlanTemplates(
    $merchantId: String,
    $id: String,
    $name: String,
    $currency: CURRENCY,
    $providerCode: String,
    $providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS,
    $transactionProviderId: String,
    $transactionProvider: TRANSACTION_PROVIDER,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userMerchantPaymentPlanTemplates(
      merchantId: $merchantId,
      id: $id,
      name: $name,
      currency: $currency,
      providerCode: $providerCode,
      providerStatus: $providerStatus,
      transactionProviderId: $transactionProviderId,
      transactionProvider: $transactionProvider,

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
          ...MerchantPaymentPlanTemplateFragment
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

export const MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY = gql(`
  query UserMerchantPaymentPlanTemplate($merchantId: String, $id: String!) {
    userMerchantPaymentPlanTemplate(merchantId: $merchantId, id: $id) {
      ...MerchantPaymentPlanTemplateFragment
    }
  }
`);

export const MERCHANT_PAYMENT_PLAN_TEMPLATES_SYNC_ONE_MUTATION = gql(`
  mutation UserMerchantPaymentPlanTemplateSyncOne(
    $merchantId: String,
    $merchantTransactionProviderId: String!,
    $providerCode: String!
  ) {
    userMerchantPaymentPlanTemplateSyncOne(
      merchantId: $merchantId,
      merchantTransactionProviderId: $merchantTransactionProviderId,
      providerCode: $providerCode
    ) {
      ...MerchantPaymentPlanTemplateFragment
    }
  }
`);
