import { gql } from '@api/gql';

export const MERCHANT_USER_INVITATION_FRAGMENT = gql(`
  fragment MerchantUserInvitationFragment on MerchantUserInvitation {
    id

    role
    email

    expiresAt
    acceptedAt
    rejectedAt
    canceledAt

    createdByMerchantUserId
    merchantId
    merchant {
      ...MerchantFragment
    }

    updatedAt
    createdAt
  }
`);
