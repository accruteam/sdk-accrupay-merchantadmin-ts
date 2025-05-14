import { gql } from '@api/gql';

export const MERCHANT_FRAGMENT = gql(`
  fragment MerchantFragment on Merchant {
    id

    publicId
    publicIdUpdatedAt

    name
    industry
    websiteUrl

    entityType

    email
    phone
    status

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

    timezone
    locale

    archivedAt

    createdAt
    updatedAt
  }
`);

export const MERCHANT_USER_FRAGMENT = gql(`
  fragment MerchantUserFragment on MerchantUser {
    id
    isEnabled
    role
    createdAt
    updatedAt

    user {
      ...UserBaseFragment
    }

    merchantId
    merchant {
      ...MerchantFragment
    }

    invitationId
  }
`);
