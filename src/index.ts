import { ApolloClient } from '@apollo/client/core';

import {
  IAccruPayMerchantAdminClientParams,
  createApolloClient,
} from '@api/apolloClient';

import { Users } from '@services/users';
import { Merchants } from '@services/merchants';

import { AccruPayMerchantAdminClientContext } from './types/context.types';

class AccruPayMerchantAdminClient {
  public readonly apolloClient: ApolloClient<unknown>;
  private readonly context: AccruPayMerchantAdminClientContext;

  public readonly users: Users;
  public readonly merchants: Merchants;

  constructor(params: IAccruPayMerchantAdminClientParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.users = new Users(this.context);
    this.merchants = new Merchants(this.context);
  }
}

export { AccruPayMerchantAdminClientResponseType } from '@utils/response.type';

export * from '@gql';
export * from '@gql/graphql';

export { AccruPayMerchantAdminClient };
export default AccruPayMerchantAdminClient;
