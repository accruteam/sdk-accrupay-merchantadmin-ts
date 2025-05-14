import { gql } from '@api/gql';

export const MERCHANT_SENT_INVITATIONS_GET_MANY_QUERY = gql(`
  query UserMerchantSentInvitations(
    $merchantId: String!,
    $accepted: Boolean,
    $canceled: Boolean,
    $expired: Boolean,
    $rejected: Boolean,

    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userMerchantSentInvitations(
      merchantId: $merchantId,

      accepted: $accepted,
      canceled: $canceled,
      expired: $expired,
      rejected: $rejected,

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
          ...MerchantUserInvitationFragment
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

export const MERCHANT_SENT_INVITATIONS_GET_ONE_QUERY = gql(`
  query UserMerchantSentInvitation($invitationId: String!, $merchantId: String) {
    userMerchantSentInvitation(invitationId: $invitationId, merchantId: $merchantId) {
      ...MerchantUserInvitationFragment
    }
  }
`);

export const MERCHANT_SENT_INVITATIONS_CREATE_MUTATION = gql(`
  mutation UserMerchantSentInvitationCreate($data: MerchantUserInvitationCreateSchema!, $merchantId: String) {
    userMerchantSentInvitationCreate(data: $data, merchantId: $merchantId) {
      ...MerchantUserInvitationFragment
    }
  }
`);

export const MERCHANT_SENT_INVITATIONS_CANCEL_MUTATION = gql(`
  mutation UserMerchantSentInvitationCancel($invitationId: String!, $merchantId: String) {
    userMerchantSentInvitationCancel(invitationId: $invitationId, merchantId: $merchantId) {
      ...MerchantUserInvitationFragment
    }
  }
`);

export const USER_RECEIVED_MERCHANT_INVITATIONS_GET_MANY_QUERY = gql(`
  query UserReceivedMerchantInvitations(
    $skip: Int,
    $take: Int,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userReceivedMerchantInvitations(
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
          ...MerchantUserInvitationFragment
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

export const USER_RECEIVED_MERCHANT_INVITATIONS_GET_ONE_QUERY = gql(`
  query UserReceivedMerchantInvitation($invitationId: String!) {
    userReceivedMerchantInvitation(invitationId: $invitationId) {
      ...MerchantUserInvitationFragment
    }
  }
`);

export const USER_RECEIVED_MERCHANT_INVITATIONS_ACCEPT_MUTATION = gql(`
  mutation UserReceivedMerchantInvitationAccept($invitationId: String!) {
    userReceivedMerchantInvitationAccept(invitationId: $invitationId) {
      ...MerchantUserInvitationFragment
    }
  }
`);

export const USER_RECEIVED_MERCHANT_INVITATIONS_REJECT_MUTATION = gql(`
  mutation UserReceivedMerchantInvitationReject($invitationId: String!) {
    userReceivedMerchantInvitationReject(invitationId: $invitationId) {
      ...MerchantUserInvitationFragment
    }
  }
`);
