import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantTransactionProviderApplicationQueryVariables,
  UserMerchantTransactionProviderApplicationsQueryVariables,
  UserMerchantTransactionProviderApplicationApplyMutationVariables,
  UserMerchantTransactionProviderCreateMutationVariables,
  UserMerchantTransactionProviderGetCredentialsSchemaQueryVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  TRANSACTION_PROVIDER_APPLICATIONS_APPLY_MUTATION,
  TRANSACTION_PROVIDER_APPLICATIONS_CREATE_MUTATION,
  TRANSACTION_PROVIDER_APPLICATIONS_GET_CREDENTIALS_SCHEMA_QUERY,
  TRANSACTION_PROVIDER_APPLICATIONS_GET_MANY_QUERY,
  TRANSACTION_PROVIDER_APPLICATIONS_GET_ONE_QUERY,
} from './queries';

class TransactionProviderApplications {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(
    variables: UserMerchantTransactionProviderApplicationsQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: TRANSACTION_PROVIDER_APPLICATIONS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantTransactionProviderApplications);
  }

  public async getOne(
    variables: UserMerchantTransactionProviderApplicationQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: TRANSACTION_PROVIDER_APPLICATIONS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantTransactionProviderApplication;
  }

  public async apply(
    variables: UserMerchantTransactionProviderApplicationApplyMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: TRANSACTION_PROVIDER_APPLICATIONS_APPLY_MUTATION,
      variables,
    });
    return data!.userMerchantTransactionProviderApplicationApply;
  }

  public async create(
    variables: UserMerchantTransactionProviderCreateMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: TRANSACTION_PROVIDER_APPLICATIONS_CREATE_MUTATION,
      variables,
    });
    return data!.userMerchantTransactionProviderCreate;
  }

  public async getCredentialsSchema(
    variables: UserMerchantTransactionProviderGetCredentialsSchemaQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: TRANSACTION_PROVIDER_APPLICATIONS_GET_CREDENTIALS_SCHEMA_QUERY,
      variables,
    });
    return data.userMerchantTransactionProviderGetCredentialsSchema;
  }
}

export { TransactionProviderApplications };
