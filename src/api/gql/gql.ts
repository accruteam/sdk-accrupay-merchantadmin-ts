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
    "\n  fragment MerchantFragment on Merchant {\n    id\n    email\n    name\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n": types.MerchantFragmentFragmentDoc,
    "\n  fragment MerchantUserFragment on MerchantUser {\n    id\n\n    isEnabled\n    role\n\n    userId\n    user {\n      ...UserFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    createdAt\n    updatedAt\n  }\n": types.MerchantUserFragmentFragmentDoc,
    "\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.UserMerchantsDocument,
    "\n  fragment UserFragment on User {\n    id\n    name\n    email\n    emailVerifiedAt\n    phone\n    phoneVerifiedAt\n    isAdmin\n    createdAt\n    updatedAt\n  }\n": types.UserFragmentFragmentDoc,
    "\n  query User {\n    user {\n      ...UserFragment\n      merchants {\n        ...MerchantUserFragment\n      }\n    }\n  }\n": types.UserDocument,
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
export function gql(source: "\n  fragment MerchantFragment on Merchant {\n    id\n    email\n    name\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment MerchantFragment on Merchant {\n    id\n    email\n    name\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantUserFragment on MerchantUser {\n    id\n\n    isEnabled\n    role\n\n    userId\n    user {\n      ...UserFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment MerchantUserFragment on MerchantUser {\n    id\n\n    isEnabled\n    role\n\n    userId\n    user {\n      ...UserFragment\n    }\n\n    merchantId\n    merchant {\n      ...MerchantFragment\n    }\n\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query UserMerchants(\n    $merchantId: String,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    userMerchants(\n      id: $merchantId,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserFragment on User {\n    id\n    name\n    email\n    emailVerifiedAt\n    phone\n    phoneVerifiedAt\n    isAdmin\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment UserFragment on User {\n    id\n    name\n    email\n    emailVerifiedAt\n    phone\n    phoneVerifiedAt\n    isAdmin\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query User {\n    user {\n      ...UserFragment\n      merchants {\n        ...MerchantUserFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query User {\n    user {\n      ...UserFragment\n      merchants {\n        ...MerchantUserFragment\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;