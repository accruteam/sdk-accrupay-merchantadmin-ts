import { ApolloClient } from '@apollo/client/core';

import {
  IAccruPayMerchantAdminClientParams,
  createApolloClient,
} from '@api/apolloClient';

import { HealthChecks } from '@services/healthChecks';
import { Users } from '@services/users';
import { Merchants } from '@services/merchants';

import { AccruPayMerchantAdminClientContext } from './types/context.types';

class AccruPayMerchantAdminClient {
  public readonly apolloClient: ApolloClient<unknown>;
  private readonly context: AccruPayMerchantAdminClientContext;

  public readonly healthChecks: HealthChecks;
  public readonly users: Users;
  public readonly merchants: Merchants;

  constructor(params: IAccruPayMerchantAdminClientParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.healthChecks = new HealthChecks(this.context);
    this.users = new Users(this.context);
    this.merchants = new Merchants(this.context);
  }
}

export { AccruPayMerchantAdminClientResponseType } from '@utils/response.type';

export * from '@gql';
export * from '@gql/graphql';

export { AccruPayMerchantAdminClient };
export default AccruPayMerchantAdminClient;
