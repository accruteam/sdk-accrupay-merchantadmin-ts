import { ApolloClient } from '@apollo/client/core';

import {
  IAccruPayMerchantAdminParams,
  createApolloClient,
} from '@api/apolloClient';

import { Users } from '@services/users';
import { Merchants } from '@services/merchants';

import { AccruPayMerchantAdminContext } from './types/context.types';

class AccruPayMerchantAdmin {
  public readonly apolloClient: ApolloClient<unknown>;
  private readonly context: AccruPayMerchantAdminContext;

  public readonly users: Users;
  public readonly merchants: Merchants;

  constructor(params: IAccruPayMerchantAdminParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.users = new Users(this.context);
    this.merchants = new Merchants(this.context);
  }
}

export { AccruPayMerchantAdminResponseType } from '@utils/response.type';

export * from '@gql';
export * from '@gql/graphql';

export { AccruPayMerchantAdmin };
export default AccruPayMerchantAdmin;
