import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantTransactionQueryVariables,
  UserMerchantTransactionsQueryVariables,
  UserMerchantTransactionSyncOneMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
  MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
  MERCHANT_TRANSACTIONS_SYNC_ONE_MUTATION,
} from './queries';

class Transactions {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(variables: UserMerchantTransactionsQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantTransactions);
  }

  public async getOne(variables: UserMerchantTransactionQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantTransaction;
  }

  public async syncOne(
    variables: UserMerchantTransactionSyncOneMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_SYNC_ONE_MUTATION,
      variables,
    });
    return data!.userMerchantTransactionSyncOne;
  }
}

export { Transactions };
