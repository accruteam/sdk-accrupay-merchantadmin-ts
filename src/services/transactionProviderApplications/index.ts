import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantTransactionProviderApplicationQueryVariables,
  UserMerchantTransactionProviderApplicationQuery,
  UserMerchantTransactionProviderApplicationsQuery,
  UserMerchantTransactionProviderApplicationsQueryVariables,
  UserMerchantTransactionProviderApplicationApplyMutationVariables,
  UserMerchantTransactionProviderApplicationApplyMutation,
  UserMerchantTransactionProviderCreateMutationVariables,
  UserMerchantTransactionProviderCreateMutation,
  UserMerchantTransactionProviderGetCredentialsSchemaQueryVariables,
  UserMerchantTransactionProviderGetCredentialsSchemaQuery,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
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
  ): Promise<Res<UserMerchantTransactionProviderApplicationsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: TRANSACTION_PROVIDER_APPLICATIONS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantTransactionProviderApplications);
  }

  public async getOne(
    variables: UserMerchantTransactionProviderApplicationQueryVariables,
  ): Promise<Res<UserMerchantTransactionProviderApplicationQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: TRANSACTION_PROVIDER_APPLICATIONS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantTransactionProviderApplication;
  }

  public async apply(
    variables: UserMerchantTransactionProviderApplicationApplyMutationVariables,
  ): Promise<Res<UserMerchantTransactionProviderApplicationApplyMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: TRANSACTION_PROVIDER_APPLICATIONS_APPLY_MUTATION,
      variables,
    });
    return data!.userMerchantTransactionProviderApplicationApply;
  }

  public async create(
    variables: UserMerchantTransactionProviderCreateMutationVariables,
  ): Promise<Res<UserMerchantTransactionProviderCreateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: TRANSACTION_PROVIDER_APPLICATIONS_CREATE_MUTATION,
      variables,
    });
    return data!.userMerchantTransactionProviderCreate;
  }

  public async getCredentialsSchema(
    variables: UserMerchantTransactionProviderGetCredentialsSchemaQueryVariables,
  ): Promise<Res<UserMerchantTransactionProviderGetCredentialsSchemaQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: TRANSACTION_PROVIDER_APPLICATIONS_GET_CREDENTIALS_SCHEMA_QUERY,
      variables,
    });
    return data.userMerchantTransactionProviderGetCredentialsSchema;
  }
}

export { TransactionProviderApplications };
