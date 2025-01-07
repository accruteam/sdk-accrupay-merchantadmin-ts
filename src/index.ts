import { ApolloClient } from '@apollo/client';

import {
  IAccruPayMerchantAdminSdkParams,
  createApolloClient,
} from '@api/apolloClient';

import { Users } from '@services/users';
import { Merchants } from '@services/merchants';

import { AccruPayMerchantAdminSdkContext } from './types/context.types';

class AccruPayMerchantAdminSdk {
  public readonly apolloClient: ApolloClient<unknown>;
  private readonly context: AccruPayMerchantAdminSdkContext;

  public readonly users: Users;
  public readonly merchants: Merchants;

  constructor(params: IAccruPayMerchantAdminSdkParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.users = new Users(this.context);
    this.merchants = new Merchants(this.context);
  }
}

export { AccruPayMerchantAdminSdkResponseType } from '@utils/response.type';
export { AccruPayMerchantAdminSdk };
