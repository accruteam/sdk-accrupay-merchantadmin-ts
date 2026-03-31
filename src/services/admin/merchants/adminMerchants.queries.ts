import { gql } from '@api/gql';

export const ADMIN_MERCHANTS_GET_QUERY = gql(`
  query AdminMerchants(
    $id: String
    $publicId: String

    $name: String
    $email: String
    $phone: String

    $status: MERCHANT_STATUS

    $entityType: MERCHANT_ENTITY_TYPE
    $legalIdentifier: String
    $legalIdentifierType: LEGAL_IDENTIFIER_TYPE

    $addressCountry: COUNTRY_ISO_2
    $addressState: String
    $addressCity: String
    $addressPostalCode: String

    $userId: String

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $skip: Int
    $take: Int
    
    $sorting: [SortingFieldSchema!]
  ) {
    adminMerchants(
      id: $id
      publicId: $publicId

      name: $name
      email: $email
      phone: $phone

      status: $status

      entityType: $entityType
      legalIdentifier: $legalIdentifier
      legalIdentifierType: $legalIdentifierType

      addressCountry: $addressCountry
      addressState: $addressState
      addressCity: $addressCity
      addressPostalCode: $addressPostalCode

      userId: $userId

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take
      
      sorting: $sorting
    ) {
      edges {
        cursor
        node {
          ...MerchantFragment
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
