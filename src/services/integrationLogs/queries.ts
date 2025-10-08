import { gql } from '@api/gql';

export const INTEGRATION_LOGS_GET_ONE_QUERY = gql(`
  query UserMerchantTransactionProviderIntegrationLog(
    $authenticatorSessionId: String!
    $merchantId: String
    $transactionProviderIntegrationLogId: String!
  ) {
    userMerchantTransactionProviderIntegrationLog(
      authenticatorSessionId: $authenticatorSessionId
      merchantId: $merchantId
      transactionProviderIntegrationLogId: $transactionProviderIntegrationLogId
    ) {
      ...TransactionProviderIntegrationLogFragment
    }
  }
`);

export const INTEGRATION_LOGS_GET_ALL_QUERY = gql(`
  query UserMerchantTransactionProviderIntegrationLogs(
    $authenticatorSessionId: String!
    $merchantId: String
    $after: ConnectionCursor
    $before: ConnectionCursor
    $first: Int
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
    $id: String
    $merchantCustomerPaymentMethodCode: String
    $merchantPaymentPlanCode: String
    $merchantPaymentPlanTransactionCode: String
    $merchantTransactionCode: String
    $merchantTransactionProviderId: String
    $provider: TRANSACTION_PROVIDER
    $succeeded: Boolean
    $url: String
  ) {
    userMerchantTransactionProviderIntegrationLogs(
      authenticatorSessionId: $authenticatorSessionId
      merchantId: $merchantId
      after: $after
      before: $before
      first: $first
      last: $last
      skip: $skip
      take: $take
      sorting: $sorting
      id: $id
      merchantCustomerPaymentMethodCode: $merchantCustomerPaymentMethodCode
      merchantPaymentPlanCode: $merchantPaymentPlanCode
      merchantPaymentPlanTransactionCode: $merchantPaymentPlanTransactionCode
      merchantTransactionCode: $merchantTransactionCode
      merchantTransactionProviderId: $merchantTransactionProviderId
      provider: $provider
      succeeded: $succeeded
      url: $url
    ) {
      edges {
        cursor
        node {
          ...TransactionProviderIntegrationLogFragment
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

export const INTEGRATION_LOGS_AUTHENTICATOR_SESSION_CREATE_MUTATION = gql(`
  mutation UserMerchantTransactionProviderIntegrationLogAuthenticatorSessionCreate(
    $authenticatorChallengePayload: JSON!
    $merchantId: String
  ) {
    userMerchantTransactionProviderIntegrationLogAuthenticatorSessionCreate(
      authenticatorChallengePayload: $authenticatorChallengePayload
      merchantId: $merchantId
    ) {
      ...AuthenticatorSessionFragment
    }
  }
`);
