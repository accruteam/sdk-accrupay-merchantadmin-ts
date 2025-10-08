import { gql } from '@api/gql';

export const AUTHENTICATORS_GET_ONE_QUERY = gql(`
  query UserAuthenticator($authenticatorId: String!) {
    userAuthenticator(authenticatorId: $authenticatorId) {
      ...AuthenticatorFragment
    }
  }
`);

export const AUTHENTICATORS_GET_ALL_QUERY = gql(`
  query UserAuthenticators(
    $after: ConnectionCursor
    $before: ConnectionCursor
    $first: Int
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
    $type: AUTHENTICATOR_TYPE!
  ) {
    userAuthenticators(
      after: $after
      before: $before
      first: $first
      last: $last
      skip: $skip
      take: $take
      sorting: $sorting
      type: $type
    ) {
      edges {
        cursor
        node {
          ...AuthenticatorFragment
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

export const AUTHENTICATORS_TOTP_ENROLLMENT_START_MUTATION = gql(`
  mutation UserAuthenticatorTotpEnrollmentStart($data: AuthenticatorEnrollmentStartSchema!) {
    userAuthenticatorTotpEnrollmentStart(data: $data) {
      ...AuthenticatorEnrollmentSessionFragment
    }
  }
`);

export const AUTHENTICATORS_TOTP_ENROLLMENT_CONFIRM_MUTATION = gql(`
  mutation UserAuthenticatorTotpEnrollmentConfirm(
    $data: AuthenticatorEnrollmentConfirmSchema!
    $payload: TotpEnrollmentConfirmPayloadSchema!
  ) {
    userAuthenticatorTotpEnrollmentConfirm(data: $data, payload: $payload) {
      ...AuthenticatorFragment
    }
  }
`);

export const AUTHENTICATORS_TOTP_REPLACEMENT_START_MUTATION = gql(`
  mutation UserAuthenticatorTotpReplacementStart(
    $authenticatorChallengePayload: JSON!
    $data: AuthenticatorReplacementStartSchema!
  ) {
    userAuthenticatorTotpReplacementStart(
      authenticatorChallengePayload: $authenticatorChallengePayload
      data: $data
    ) {
      ...AuthenticatorReplacementSessionFragment
    }
  }
`);

export const AUTHENTICATORS_TOTP_REPLACEMENT_CONFIRM_MUTATION = gql(`
  mutation UserAuthenticatorTotpReplacementConfirm(
    $data: AuthenticatorReplacementConfirmSchema!
    $payload: TotpReplacementConfirmPayloadSchema!
  ) {
    userAuthenticatorTotpReplacementConfirm(data: $data, payload: $payload) {
      ...AuthenticatorFragment
    }
  }
`);

export const AUTHENTICATORS_REVOKE_MUTATION = gql(`
  mutation UserAuthenticatorRevoke(
    $authenticatorId: String!
    $authenticatorChallengePayload: JSON!
  ) {
    userAuthenticatorRevoke(
      authenticatorId: $authenticatorId
      authenticatorChallengePayload: $authenticatorChallengePayload
    ) {
      ...AuthenticatorFragment
    }
  }
`);
