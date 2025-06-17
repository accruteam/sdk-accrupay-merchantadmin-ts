import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantCustomerPaymentMethodQuery,
  UserMerchantCustomerPaymentMethodQueryVariables,
  UserMerchantCustomerPaymentMethodsQuery,
  UserMerchantCustomerPaymentMethodsQueryVariables,
  UserMerchantCustomerPaymentMethodSyncOneMutation,
  UserMerchantCustomerPaymentMethodSyncOneMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_CUSTOMER_PAYMENT_METHODS_GET_MANY_QUERY,
  MERCHANT_CUSTOMER_PAYMENT_METHODS_GET_ONE_QUERY,
  MERCHANT_CUSTOMER_PAYMENT_METHODS_SYNC_ONE_MUTATION,
} from './queries';

class CustomerPaymentMethods {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(
    variables: UserMerchantCustomerPaymentMethodsQueryVariables,
  ): Promise<Res<UserMerchantCustomerPaymentMethodsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_CUSTOMER_PAYMENT_METHODS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantCustomerPaymentMethods);
  }

  public async getOne(
    variables: UserMerchantCustomerPaymentMethodQueryVariables,
  ): Promise<Res<UserMerchantCustomerPaymentMethodQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_CUSTOMER_PAYMENT_METHODS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantCustomerPaymentMethod;
  }

  public async syncOne(
    variables: UserMerchantCustomerPaymentMethodSyncOneMutationVariables,
  ): Promise<Res<UserMerchantCustomerPaymentMethodSyncOneMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_CUSTOMER_PAYMENT_METHODS_SYNC_ONE_MUTATION,
      variables,
    });
    return data!.userMerchantCustomerPaymentMethodSyncOne;
  }
}

export { CustomerPaymentMethods };
