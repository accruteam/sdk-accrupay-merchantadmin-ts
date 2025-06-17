import { gql } from '@api/gql';

export const MERCHANT_PAYMENT_PLAN_FRAGMENT = gql(`
  fragment MerchantPaymentPlanFragment on MerchantPaymentPlan {
    id
    merchantInternalPaymentPlanCode
    merchantInternalPaymentPlanDescription
    merchantInternalCustomerCode
    amount
    initialAmount
    currency
    providerCode
    providerError
    providerLastSyncedAt
    providerLastVerifiedAt
    providerStatus
    status

    transactionProviderId
    transactionProvider {
      ...MerchantTransactionProviderFragment
    }

    renewalIntervalDays
    renewalIntervalMonths
    renewalIntervalYears

    endsAfterDays
    endsAfterMonths
    endsAfterYears

    trialPeriodDays
    trialPeriodMonths
    trialPeriodYears

    periodCount
    timeAnchor
    currentPeriodStart
    currentPeriodEnd
    startedAt
    endsAt
    trialEndsAt
    canceledAt

    paymentMethodId
    templateId

    payload

    createdAt
    updatedAt
  }
`);
