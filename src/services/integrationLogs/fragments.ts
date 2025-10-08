import { gql } from '@api/gql';

export const TRANSACTION_PROVIDER_INTEGRATION_LOG_FRAGMENT = gql(`
  fragment TransactionProviderIntegrationLogFragment on TransactionProviderIntegrationLog {
    id
    merchantId
    merchantTransactionProviderId
    merchantTransactionCode
    merchantCustomerPaymentMethodCode
    merchantPaymentPlanCode
    merchantPaymentPlanTransactionCode
    provider
    url
    request
    response
    payload
    metadata
    succeeded
    createdAt
    updatedAt
  }
`);
