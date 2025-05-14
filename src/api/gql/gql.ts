/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query HealthCheck {\n    healthCheck\n  }\n": typeof types.HealthCheckDocument,
    "\n  fragment MerchantUserInvitationFragment on MerchantUserInvitation {\n    id\n\n    role\n    email\n\n    expiresAt\n    acceptedAt\n    rejectedAt\n    canceledAt\n\n    createdByMerchantUserId\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    updatedAt\n    createdAt\n  }\n": typeof types.MerchantUserInvitationFragmentFragmentDoc,
    "\n  query UserMerchantSentInvitations(\n    $merchantId: String!,\n    $accepted: Boolean,\n    $canceled: Boolean,\n    $expired: Boolean,\n    $rejected: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchantSentInvitations(\n      merchantId: $merchantId,\n\n      accepted: $accepted,\n      canceled: $canceled,\n      expired: $expired,\n      rejected: $rejected,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantUserInvitationFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": typeof types.UserMerchantSentInvitationsDocument,
    "\n  query UserMerchantSentInvitation($invitationId: String!, $merchantId: String) {\n    userMerchantSentInvitation(invitationId: $invitationId, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": typeof types.UserMerchantSentInvitationDocument,
    "\n  mutation UserMerchantSentInvitationCreate($data: MerchantUserInvitationCreateSchema!, $merchantId: String) {\n    userMerchantSentInvitationCreate(data: $data, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": typeof types.UserMerchantSentInvitationCreateDocument,
    "\n  mutation UserMerchantSentInvitationCancel($invitationId: String!, $merchantId: String) {\n    userMerchantSentInvitationCancel(invitationId: $invitationId, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": typeof types.UserMerchantSentInvitationCancelDocument,
    "\n  query UserReceivedMerchantInvitations(\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userReceivedMerchantInvitations(\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantUserInvitationFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": typeof types.UserReceivedMerchantInvitationsDocument,
    "\n  query UserReceivedMerchantInvitation($invitationId: String!) {\n    userReceivedMerchantInvitation(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": typeof types.UserReceivedMerchantInvitationDocument,
    "\n  mutation UserReceivedMerchantInvitationAccept($invitationId: String!) {\n    userReceivedMerchantInvitationAccept(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": typeof types.UserReceivedMerchantInvitationAcceptDocument,
    "\n  mutation UserReceivedMerchantInvitationReject($invitationId: String!) {\n    userReceivedMerchantInvitationReject(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": typeof types.UserReceivedMerchantInvitationRejectDocument,
    "\n  fragment MerchantFragment on Merchant {\n    id\n\n    publicId\n    publicIdUpdatedAt\n\n    name\n    industry\n    websiteUrl\n\n    entityType\n\n    email\n    phone\n    status\n\n    addressCountry\n    addressState\n    addressCity\n    addressLine1\n    addressLine2\n    addressPostalCode\n\n    legalAddressCountry\n    legalAddressState\n    legalAddressCity\n    legalAddressLine1\n    legalAddressLine2\n    legalAddressPostalCode\n\n    primaryContactName\n    primaryContactEmail\n    primaryContactPhone\n\n    timezone\n    locale\n\n    archivedAt\n\n    createdAt\n    updatedAt\n  }\n": typeof types.MerchantFragmentFragmentDoc,
    "\n  fragment MerchantUserFragment on MerchantUser {\n    id\n    isEnabled\n    role\n    createdAt\n    updatedAt\n\n    user {\n      ...UserBaseFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    invitationId\n  }\n": typeof types.MerchantUserFragmentFragmentDoc,
    "\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": typeof types.UserMerchantsDocument,
    "\n  query UserMerchant($merchantId: String!) {\n    userMerchant(merchantId: $merchantId) {\n      ...MerchantFragment\n    }\n  }\n": typeof types.UserMerchantDocument,
    "\n  mutation UserMerchantCreate($data: MerchantCreateSchema!) {\n    userMerchantCreate(data: $data) {\n      ...MerchantFragment\n    }\n  }\n": typeof types.UserMerchantCreateDocument,
    "\n  mutation UserMerchantUpdate($merchantId: String!, $data: MerchantUpdateSchema!) {\n    userMerchantUpdate(merchantId: $merchantId, data: $data) {\n      ...MerchantFragment\n    }\n  }\n": typeof types.UserMerchantUpdateDocument,
    "\n  fragment UserBaseFragment on User {\n    id\n    name\n    email\n    phone\n    createdAt\n    updatedAt\n    isAdmin\n    emailVerificationId\n    phoneVerificationId\n  }\n": typeof types.UserBaseFragmentFragmentDoc,
    "\n  fragment UserFragment on User {\n    ...UserBaseFragment\n    merchants {\n      ...MerchantUserFragment\n    }\n  }\n": typeof types.UserFragmentFragmentDoc,
    "\n  query User {\n    user {\n      ...UserFragment\n    }\n  }\n": typeof types.UserDocument,
    "\n  mutation UserSignUpWithEmailStart($data: UserSignUpWithEmailStartSchema!) {\n    userSignUpWithEmailStart(data: $data)\n  }\n": typeof types.UserSignUpWithEmailStartDocument,
    "\n  mutation UserSignUpWithEmailVerify($data: UserSignUpWithEmailVerifySchema!) {\n    userSignUpWithEmailVerify(data: $data)\n  }\n": typeof types.UserSignUpWithEmailVerifyDocument,
    "\n  mutation UserSignUpWithEmailFinish($data: UserSignUpWithEmailFinishSchema!) {\n    userSignUpWithEmailFinish(data: $data)\n  }\n": typeof types.UserSignUpWithEmailFinishDocument,
    "\n  mutation UserUpdateData($data: UserUpdateDataSchema!) {\n    userUpdateData(data: $data) {\n      ...UserFragment\n    }\n  }\n": typeof types.UserUpdateDataDocument,
    "\n  mutation UserSessionsClose {\n    userSessionsClose\n  }\n": typeof types.UserSessionsCloseDocument,
    "\n  mutation UserPasswordChangeStart($data: UserPasswordChangeStartSchema!) {\n    userPasswordChangeStart(data: $data)\n  }\n": typeof types.UserPasswordChangeStartDocument,
    "\n  mutation UserPasswordChangeFinish($data: UserPasswordChangeFinishSchema!) {\n    userPasswordChangeFinish(data: $data)\n  }\n": typeof types.UserPasswordChangeFinishDocument,
    "\n  mutation UserEmailVerifyOrChangeStart($data: UserEmailVerifyOrChangeStartSchema!) {\n    userEmailVerifyOrChangeStart(data: $data)\n  }\n": typeof types.UserEmailVerifyOrChangeStartDocument,
    "\n  mutation UserEmailVerifyOrChangeFinish($data: UserEmailVerifyOrChangeFinishSchema!) {\n    userEmailVerifyOrChangeFinish(data: $data) {\n      ...UserFragment\n    }\n  }\n": typeof types.UserEmailVerifyOrChangeFinishDocument,
    "\n  mutation UserHandleLoginAttempt($email: String!) {\n    userHandleLoginAttempt(email: $email)\n  }\n": typeof types.UserHandleLoginAttemptDocument,
    "\n  mutation UserPasswordResetStart($data: UserPasswordResetStartSchema!) {\n    userPasswordResetStart(data: $data)\n  }\n": typeof types.UserPasswordResetStartDocument,
    "\n  mutation UserPasswordResetFinish($data: UserPasswordResetFinishSchema!) {\n    userPasswordResetFinish(data: $data)\n  }\n": typeof types.UserPasswordResetFinishDocument,
};
const documents: Documents = {
    "\n  query HealthCheck {\n    healthCheck\n  }\n": types.HealthCheckDocument,
    "\n  fragment MerchantUserInvitationFragment on MerchantUserInvitation {\n    id\n\n    role\n    email\n\n    expiresAt\n    acceptedAt\n    rejectedAt\n    canceledAt\n\n    createdByMerchantUserId\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    updatedAt\n    createdAt\n  }\n": types.MerchantUserInvitationFragmentFragmentDoc,
    "\n  query UserMerchantSentInvitations(\n    $merchantId: String!,\n    $accepted: Boolean,\n    $canceled: Boolean,\n    $expired: Boolean,\n    $rejected: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchantSentInvitations(\n      merchantId: $merchantId,\n\n      accepted: $accepted,\n      canceled: $canceled,\n      expired: $expired,\n      rejected: $rejected,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantUserInvitationFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.UserMerchantSentInvitationsDocument,
    "\n  query UserMerchantSentInvitation($invitationId: String!, $merchantId: String) {\n    userMerchantSentInvitation(invitationId: $invitationId, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": types.UserMerchantSentInvitationDocument,
    "\n  mutation UserMerchantSentInvitationCreate($data: MerchantUserInvitationCreateSchema!, $merchantId: String) {\n    userMerchantSentInvitationCreate(data: $data, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": types.UserMerchantSentInvitationCreateDocument,
    "\n  mutation UserMerchantSentInvitationCancel($invitationId: String!, $merchantId: String) {\n    userMerchantSentInvitationCancel(invitationId: $invitationId, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": types.UserMerchantSentInvitationCancelDocument,
    "\n  query UserReceivedMerchantInvitations(\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userReceivedMerchantInvitations(\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantUserInvitationFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.UserReceivedMerchantInvitationsDocument,
    "\n  query UserReceivedMerchantInvitation($invitationId: String!) {\n    userReceivedMerchantInvitation(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": types.UserReceivedMerchantInvitationDocument,
    "\n  mutation UserReceivedMerchantInvitationAccept($invitationId: String!) {\n    userReceivedMerchantInvitationAccept(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": types.UserReceivedMerchantInvitationAcceptDocument,
    "\n  mutation UserReceivedMerchantInvitationReject($invitationId: String!) {\n    userReceivedMerchantInvitationReject(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n": types.UserReceivedMerchantInvitationRejectDocument,
    "\n  fragment MerchantFragment on Merchant {\n    id\n\n    publicId\n    publicIdUpdatedAt\n\n    name\n    industry\n    websiteUrl\n\n    entityType\n\n    email\n    phone\n    status\n\n    addressCountry\n    addressState\n    addressCity\n    addressLine1\n    addressLine2\n    addressPostalCode\n\n    legalAddressCountry\n    legalAddressState\n    legalAddressCity\n    legalAddressLine1\n    legalAddressLine2\n    legalAddressPostalCode\n\n    primaryContactName\n    primaryContactEmail\n    primaryContactPhone\n\n    timezone\n    locale\n\n    archivedAt\n\n    createdAt\n    updatedAt\n  }\n": types.MerchantFragmentFragmentDoc,
    "\n  fragment MerchantUserFragment on MerchantUser {\n    id\n    isEnabled\n    role\n    createdAt\n    updatedAt\n\n    user {\n      ...UserBaseFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    invitationId\n  }\n": types.MerchantUserFragmentFragmentDoc,
    "\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.UserMerchantsDocument,
    "\n  query UserMerchant($merchantId: String!) {\n    userMerchant(merchantId: $merchantId) {\n      ...MerchantFragment\n    }\n  }\n": types.UserMerchantDocument,
    "\n  mutation UserMerchantCreate($data: MerchantCreateSchema!) {\n    userMerchantCreate(data: $data) {\n      ...MerchantFragment\n    }\n  }\n": types.UserMerchantCreateDocument,
    "\n  mutation UserMerchantUpdate($merchantId: String!, $data: MerchantUpdateSchema!) {\n    userMerchantUpdate(merchantId: $merchantId, data: $data) {\n      ...MerchantFragment\n    }\n  }\n": types.UserMerchantUpdateDocument,
    "\n  fragment UserBaseFragment on User {\n    id\n    name\n    email\n    phone\n    createdAt\n    updatedAt\n    isAdmin\n    emailVerificationId\n    phoneVerificationId\n  }\n": types.UserBaseFragmentFragmentDoc,
    "\n  fragment UserFragment on User {\n    ...UserBaseFragment\n    merchants {\n      ...MerchantUserFragment\n    }\n  }\n": types.UserFragmentFragmentDoc,
    "\n  query User {\n    user {\n      ...UserFragment\n    }\n  }\n": types.UserDocument,
    "\n  mutation UserSignUpWithEmailStart($data: UserSignUpWithEmailStartSchema!) {\n    userSignUpWithEmailStart(data: $data)\n  }\n": types.UserSignUpWithEmailStartDocument,
    "\n  mutation UserSignUpWithEmailVerify($data: UserSignUpWithEmailVerifySchema!) {\n    userSignUpWithEmailVerify(data: $data)\n  }\n": types.UserSignUpWithEmailVerifyDocument,
    "\n  mutation UserSignUpWithEmailFinish($data: UserSignUpWithEmailFinishSchema!) {\n    userSignUpWithEmailFinish(data: $data)\n  }\n": types.UserSignUpWithEmailFinishDocument,
    "\n  mutation UserUpdateData($data: UserUpdateDataSchema!) {\n    userUpdateData(data: $data) {\n      ...UserFragment\n    }\n  }\n": types.UserUpdateDataDocument,
    "\n  mutation UserSessionsClose {\n    userSessionsClose\n  }\n": types.UserSessionsCloseDocument,
    "\n  mutation UserPasswordChangeStart($data: UserPasswordChangeStartSchema!) {\n    userPasswordChangeStart(data: $data)\n  }\n": types.UserPasswordChangeStartDocument,
    "\n  mutation UserPasswordChangeFinish($data: UserPasswordChangeFinishSchema!) {\n    userPasswordChangeFinish(data: $data)\n  }\n": types.UserPasswordChangeFinishDocument,
    "\n  mutation UserEmailVerifyOrChangeStart($data: UserEmailVerifyOrChangeStartSchema!) {\n    userEmailVerifyOrChangeStart(data: $data)\n  }\n": types.UserEmailVerifyOrChangeStartDocument,
    "\n  mutation UserEmailVerifyOrChangeFinish($data: UserEmailVerifyOrChangeFinishSchema!) {\n    userEmailVerifyOrChangeFinish(data: $data) {\n      ...UserFragment\n    }\n  }\n": types.UserEmailVerifyOrChangeFinishDocument,
    "\n  mutation UserHandleLoginAttempt($email: String!) {\n    userHandleLoginAttempt(email: $email)\n  }\n": types.UserHandleLoginAttemptDocument,
    "\n  mutation UserPasswordResetStart($data: UserPasswordResetStartSchema!) {\n    userPasswordResetStart(data: $data)\n  }\n": types.UserPasswordResetStartDocument,
    "\n  mutation UserPasswordResetFinish($data: UserPasswordResetFinishSchema!) {\n    userPasswordResetFinish(data: $data)\n  }\n": types.UserPasswordResetFinishDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HealthCheck {\n    healthCheck\n  }\n"): (typeof documents)["\n  query HealthCheck {\n    healthCheck\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantUserInvitationFragment on MerchantUserInvitation {\n    id\n\n    role\n    email\n\n    expiresAt\n    acceptedAt\n    rejectedAt\n    canceledAt\n\n    createdByMerchantUserId\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    updatedAt\n    createdAt\n  }\n"): (typeof documents)["\n  fragment MerchantUserInvitationFragment on MerchantUserInvitation {\n    id\n\n    role\n    email\n\n    expiresAt\n    acceptedAt\n    rejectedAt\n    canceledAt\n\n    createdByMerchantUserId\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    updatedAt\n    createdAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserMerchantSentInvitations(\n    $merchantId: String!,\n    $accepted: Boolean,\n    $canceled: Boolean,\n    $expired: Boolean,\n    $rejected: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchantSentInvitations(\n      merchantId: $merchantId,\n\n      accepted: $accepted,\n      canceled: $canceled,\n      expired: $expired,\n      rejected: $rejected,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantUserInvitationFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query UserMerchantSentInvitations(\n    $merchantId: String!,\n    $accepted: Boolean,\n    $canceled: Boolean,\n    $expired: Boolean,\n    $rejected: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchantSentInvitations(\n      merchantId: $merchantId,\n\n      accepted: $accepted,\n      canceled: $canceled,\n      expired: $expired,\n      rejected: $rejected,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantUserInvitationFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserMerchantSentInvitation($invitationId: String!, $merchantId: String) {\n    userMerchantSentInvitation(invitationId: $invitationId, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"): (typeof documents)["\n  query UserMerchantSentInvitation($invitationId: String!, $merchantId: String) {\n    userMerchantSentInvitation(invitationId: $invitationId, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserMerchantSentInvitationCreate($data: MerchantUserInvitationCreateSchema!, $merchantId: String) {\n    userMerchantSentInvitationCreate(data: $data, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserMerchantSentInvitationCreate($data: MerchantUserInvitationCreateSchema!, $merchantId: String) {\n    userMerchantSentInvitationCreate(data: $data, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserMerchantSentInvitationCancel($invitationId: String!, $merchantId: String) {\n    userMerchantSentInvitationCancel(invitationId: $invitationId, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserMerchantSentInvitationCancel($invitationId: String!, $merchantId: String) {\n    userMerchantSentInvitationCancel(invitationId: $invitationId, merchantId: $merchantId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserReceivedMerchantInvitations(\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userReceivedMerchantInvitations(\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantUserInvitationFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query UserReceivedMerchantInvitations(\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userReceivedMerchantInvitations(\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantUserInvitationFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserReceivedMerchantInvitation($invitationId: String!) {\n    userReceivedMerchantInvitation(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"): (typeof documents)["\n  query UserReceivedMerchantInvitation($invitationId: String!) {\n    userReceivedMerchantInvitation(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserReceivedMerchantInvitationAccept($invitationId: String!) {\n    userReceivedMerchantInvitationAccept(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserReceivedMerchantInvitationAccept($invitationId: String!) {\n    userReceivedMerchantInvitationAccept(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserReceivedMerchantInvitationReject($invitationId: String!) {\n    userReceivedMerchantInvitationReject(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserReceivedMerchantInvitationReject($invitationId: String!) {\n    userReceivedMerchantInvitationReject(invitationId: $invitationId) {\n      ...MerchantUserInvitationFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantFragment on Merchant {\n    id\n\n    publicId\n    publicIdUpdatedAt\n\n    name\n    industry\n    websiteUrl\n\n    entityType\n\n    email\n    phone\n    status\n\n    addressCountry\n    addressState\n    addressCity\n    addressLine1\n    addressLine2\n    addressPostalCode\n\n    legalAddressCountry\n    legalAddressState\n    legalAddressCity\n    legalAddressLine1\n    legalAddressLine2\n    legalAddressPostalCode\n\n    primaryContactName\n    primaryContactEmail\n    primaryContactPhone\n\n    timezone\n    locale\n\n    archivedAt\n\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment MerchantFragment on Merchant {\n    id\n\n    publicId\n    publicIdUpdatedAt\n\n    name\n    industry\n    websiteUrl\n\n    entityType\n\n    email\n    phone\n    status\n\n    addressCountry\n    addressState\n    addressCity\n    addressLine1\n    addressLine2\n    addressPostalCode\n\n    legalAddressCountry\n    legalAddressState\n    legalAddressCity\n    legalAddressLine1\n    legalAddressLine2\n    legalAddressPostalCode\n\n    primaryContactName\n    primaryContactEmail\n    primaryContactPhone\n\n    timezone\n    locale\n\n    archivedAt\n\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantUserFragment on MerchantUser {\n    id\n    isEnabled\n    role\n    createdAt\n    updatedAt\n\n    user {\n      ...UserBaseFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    invitationId\n  }\n"): (typeof documents)["\n  fragment MerchantUserFragment on MerchantUser {\n    id\n    isEnabled\n    role\n    createdAt\n    updatedAt\n\n    user {\n      ...UserBaseFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    invitationId\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserMerchant($merchantId: String!) {\n    userMerchant(merchantId: $merchantId) {\n      ...MerchantFragment\n    }\n  }\n"): (typeof documents)["\n  query UserMerchant($merchantId: String!) {\n    userMerchant(merchantId: $merchantId) {\n      ...MerchantFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserMerchantCreate($data: MerchantCreateSchema!) {\n    userMerchantCreate(data: $data) {\n      ...MerchantFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserMerchantCreate($data: MerchantCreateSchema!) {\n    userMerchantCreate(data: $data) {\n      ...MerchantFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserMerchantUpdate($merchantId: String!, $data: MerchantUpdateSchema!) {\n    userMerchantUpdate(merchantId: $merchantId, data: $data) {\n      ...MerchantFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserMerchantUpdate($merchantId: String!, $data: MerchantUpdateSchema!) {\n    userMerchantUpdate(merchantId: $merchantId, data: $data) {\n      ...MerchantFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserBaseFragment on User {\n    id\n    name\n    email\n    phone\n    createdAt\n    updatedAt\n    isAdmin\n    emailVerificationId\n    phoneVerificationId\n  }\n"): (typeof documents)["\n  fragment UserBaseFragment on User {\n    id\n    name\n    email\n    phone\n    createdAt\n    updatedAt\n    isAdmin\n    emailVerificationId\n    phoneVerificationId\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserFragment on User {\n    ...UserBaseFragment\n    merchants {\n      ...MerchantUserFragment\n    }\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    ...UserBaseFragment\n    merchants {\n      ...MerchantUserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User {\n    user {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  query User {\n    user {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserSignUpWithEmailStart($data: UserSignUpWithEmailStartSchema!) {\n    userSignUpWithEmailStart(data: $data)\n  }\n"): (typeof documents)["\n  mutation UserSignUpWithEmailStart($data: UserSignUpWithEmailStartSchema!) {\n    userSignUpWithEmailStart(data: $data)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserSignUpWithEmailVerify($data: UserSignUpWithEmailVerifySchema!) {\n    userSignUpWithEmailVerify(data: $data)\n  }\n"): (typeof documents)["\n  mutation UserSignUpWithEmailVerify($data: UserSignUpWithEmailVerifySchema!) {\n    userSignUpWithEmailVerify(data: $data)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserSignUpWithEmailFinish($data: UserSignUpWithEmailFinishSchema!) {\n    userSignUpWithEmailFinish(data: $data)\n  }\n"): (typeof documents)["\n  mutation UserSignUpWithEmailFinish($data: UserSignUpWithEmailFinishSchema!) {\n    userSignUpWithEmailFinish(data: $data)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserUpdateData($data: UserUpdateDataSchema!) {\n    userUpdateData(data: $data) {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserUpdateData($data: UserUpdateDataSchema!) {\n    userUpdateData(data: $data) {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserSessionsClose {\n    userSessionsClose\n  }\n"): (typeof documents)["\n  mutation UserSessionsClose {\n    userSessionsClose\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserPasswordChangeStart($data: UserPasswordChangeStartSchema!) {\n    userPasswordChangeStart(data: $data)\n  }\n"): (typeof documents)["\n  mutation UserPasswordChangeStart($data: UserPasswordChangeStartSchema!) {\n    userPasswordChangeStart(data: $data)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserPasswordChangeFinish($data: UserPasswordChangeFinishSchema!) {\n    userPasswordChangeFinish(data: $data)\n  }\n"): (typeof documents)["\n  mutation UserPasswordChangeFinish($data: UserPasswordChangeFinishSchema!) {\n    userPasswordChangeFinish(data: $data)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserEmailVerifyOrChangeStart($data: UserEmailVerifyOrChangeStartSchema!) {\n    userEmailVerifyOrChangeStart(data: $data)\n  }\n"): (typeof documents)["\n  mutation UserEmailVerifyOrChangeStart($data: UserEmailVerifyOrChangeStartSchema!) {\n    userEmailVerifyOrChangeStart(data: $data)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserEmailVerifyOrChangeFinish($data: UserEmailVerifyOrChangeFinishSchema!) {\n    userEmailVerifyOrChangeFinish(data: $data) {\n      ...UserFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UserEmailVerifyOrChangeFinish($data: UserEmailVerifyOrChangeFinishSchema!) {\n    userEmailVerifyOrChangeFinish(data: $data) {\n      ...UserFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserHandleLoginAttempt($email: String!) {\n    userHandleLoginAttempt(email: $email)\n  }\n"): (typeof documents)["\n  mutation UserHandleLoginAttempt($email: String!) {\n    userHandleLoginAttempt(email: $email)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserPasswordResetStart($data: UserPasswordResetStartSchema!) {\n    userPasswordResetStart(data: $data)\n  }\n"): (typeof documents)["\n  mutation UserPasswordResetStart($data: UserPasswordResetStartSchema!) {\n    userPasswordResetStart(data: $data)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UserPasswordResetFinish($data: UserPasswordResetFinishSchema!) {\n    userPasswordResetFinish(data: $data)\n  }\n"): (typeof documents)["\n  mutation UserPasswordResetFinish($data: UserPasswordResetFinishSchema!) {\n    userPasswordResetFinish(data: $data)\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;