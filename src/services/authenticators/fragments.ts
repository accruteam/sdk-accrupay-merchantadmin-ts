import { gql } from '@api/gql';

export const AUTHENTICATOR_FRAGMENT = gql(`
  fragment AuthenticatorFragment on Authenticator {
    id
    entityId
    entityType
    type
    status
    statusReason
    label
    lastUsedAt
    createdAt
    updatedAt
  }
`);

export const AUTHENTICATOR_ENROLLMENT_SESSION_FRAGMENT = gql(`
  fragment AuthenticatorEnrollmentSessionFragment on AuthenticatorEnrollmentSession {
    enrollmentId
    entityId
    entityType
    type
    label
    payload
    expiresAt
  }
`);

export const AUTHENTICATOR_REPLACEMENT_SESSION_FRAGMENT = gql(`
  fragment AuthenticatorReplacementSessionFragment on AuthenticatorReplacementSession {
    replacementId
    entityId
    entityType
    type
    label
    payload
    expiresAt
  }
`);

export const AUTHENTICATOR_SESSION_FRAGMENT = gql(`
  fragment AuthenticatorSessionFragment on AuthenticatorSession {
    sessionId
    entityId
    entityType
    featureKey
    createdAt
    expiresAt
  }
`);
