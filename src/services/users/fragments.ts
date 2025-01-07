import { gql } from '@api/gql';

export const USER_FRAGMENT = gql(`
  fragment UserFragment on User {
    id
    name
    email
    emailVerifiedAt
    phone
    phoneVerifiedAt
    isAdmin
    createdAt
    updatedAt
  }
`);
