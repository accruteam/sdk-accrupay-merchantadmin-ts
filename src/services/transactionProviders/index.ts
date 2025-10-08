import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantTransactionProviderQueryVariables,
  UserMerchantTransactionProvidersQueryVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY,
  MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY,
} from './queries';

class TransactionProviders {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(
    variables: UserMerchantTransactionProvidersQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data!.userMerchantTransactionProviders);
  }

  public async getOne(
    variables: UserMerchantTransactionProviderQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY,
      variables,
    });
    return data!.userMerchantTransactionProvider;
  }
}
export { TransactionProviders };
