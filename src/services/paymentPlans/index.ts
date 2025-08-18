import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantPaymentPlanQueryVariables,
  UserMerchantPaymentPlansQueryVariables,
  UserMerchantPaymentPlanSyncOneMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY,
  MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY,
  MERCHANT_PAYMENT_PLANS_SYNC_ONE_MUTATION,
} from './queries';

class PaymentPlans {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(variables: UserMerchantPaymentPlansQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantPaymentPlans);
  }

  public async getOne(variables: UserMerchantPaymentPlanQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantPaymentPlan;
  }

  public async syncOne(
    variables: UserMerchantPaymentPlanSyncOneMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLANS_SYNC_ONE_MUTATION,
      variables,
    });
    return data!.userMerchantPaymentPlanSyncOne;
  }
}

export { PaymentPlans };
