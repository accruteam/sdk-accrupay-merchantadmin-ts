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
const documents = {
    "\n  fragment MerchantFragment on Merchant {\n    id\n    name\n    email\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n": types.MerchantFragmentFragmentDoc,
    "\n  fragment MerchantUserFragment on MerchantUser {\n    id\n    isEnabled\n    role\n    createdAt\n    updatedAt\n\n    user {\n      ...UserBaseFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n  }\n": types.MerchantUserFragmentFragmentDoc,
    "\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.UserMerchantsDocument,
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
export function gql(source: "\n  fragment MerchantFragment on Merchant {\n    id\n    name\n    email\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment MerchantFragment on Merchant {\n    id\n    name\n    email\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantUserFragment on MerchantUser {\n    id\n    isEnabled\n    role\n    createdAt\n    updatedAt\n\n    user {\n      ...UserBaseFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n  }\n"): (typeof documents)["\n  fragment MerchantUserFragment on MerchantUser {\n    id\n    isEnabled\n    role\n    createdAt\n    updatedAt\n\n    user {\n      ...UserBaseFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
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