import { gql } from '@api/gql';

export const MERCHANT_TRANSACTION_PROVIDER_APPLICATION_FRAGMENT = gql(`
  fragment MerchantTransactionProviderApplicationFragment on MerchantTransactionProviderApplication {
    id
    merchantId
    provider
    providerCode
    providerStatus
    providerError
    providerLastSyncedAt
    providerLastVerifiedAt
    status
    statusDescription
    startedAt
    closedAt
    createdAt
    updatedAt

    name
    industry
    websiteUrl
    entityType
    email
    phone

    addressCountry
    addressState
    addressCity
    addressLine1
    addressLine2
    addressPostalCode

    legalAddressCountry
    legalAddressState
    legalAddressCity
    legalAddressLine1
    legalAddressLine2
    legalAddressPostalCode

    primaryContactName
    primaryContactEmail
    primaryContactPhone
  }
`);
