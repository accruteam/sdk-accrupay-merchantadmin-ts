import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantTransactionProviderIntegrationLogAuthenticatorSessionCreateMutationVariables,
  UserMerchantTransactionProviderIntegrationLogQueryVariables,
  UserMerchantTransactionProviderIntegrationLogsQueryVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  INTEGRATION_LOGS_GET_ONE_QUERY,
  INTEGRATION_LOGS_GET_ALL_QUERY,
  INTEGRATION_LOGS_AUTHENTICATOR_SESSION_CREATE_MUTATION,
} from './queries';

class IntegrationLogs {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getOne(
    variables: UserMerchantTransactionProviderIntegrationLogQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: INTEGRATION_LOGS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantTransactionProviderIntegrationLog;
  }

  public async getMany(
    variables: UserMerchantTransactionProviderIntegrationLogsQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: INTEGRATION_LOGS_GET_ALL_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantTransactionProviderIntegrationLogs);
  }

  public async createAuthenticatorSession(
    variables: UserMerchantTransactionProviderIntegrationLogAuthenticatorSessionCreateMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: INTEGRATION_LOGS_AUTHENTICATOR_SESSION_CREATE_MUTATION,
      variables,
    });
    return data!
      .userMerchantTransactionProviderIntegrationLogAuthenticatorSessionCreate;
  }
}

export { IntegrationLogs };
