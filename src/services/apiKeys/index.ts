import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantApiKeyQueryVariables,
  UserMerchantApiKeysQueryVariables,
  UserMerchantApiKeyCreateMutationVariables,
  UserMerchantApiKeyDeleteMutationVariables,
  UserMerchantApiKeyShowSecretMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  API_KEYS_GET_ONE_QUERY,
  API_KEYS_GET_ALL_QUERY,
  API_KEYS_CREATE_MUTATION,
  API_KEYS_DELETE_MUTATION,
  API_KEYS_SHOW_SECRET_MUTATION,
} from './queries';

class ApiKeys {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getOne(variables: UserMerchantApiKeyQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: API_KEYS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantApiKey;
  }

  public async getMany(variables: UserMerchantApiKeysQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: API_KEYS_GET_ALL_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantApiKeys);
  }

  public async create(variables: UserMerchantApiKeyCreateMutationVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: API_KEYS_CREATE_MUTATION,
      variables,
    });
    return data!.userMerchantApiKeyCreate;
  }

  public async delete(variables: UserMerchantApiKeyDeleteMutationVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: API_KEYS_DELETE_MUTATION,
      variables,
    });
    return data!.userMerchantApiKeyDelete;
  }

  public async showSecret(
    variables: UserMerchantApiKeyShowSecretMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: API_KEYS_SHOW_SECRET_MUTATION,
      variables,
    });
    return data!.userMerchantApiKeyShowSecret;
  }
}

export { ApiKeys };
