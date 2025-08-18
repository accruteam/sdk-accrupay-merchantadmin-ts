import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantPaymentPlanTemplateQueryVariables,
  UserMerchantPaymentPlanTemplatesQueryVariables,
  UserMerchantPaymentPlanTemplateSyncOneMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY,
  MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY,
  MERCHANT_PAYMENT_PLAN_TEMPLATES_SYNC_ONE_MUTATION,
} from './queries';

class PaymentPlanTemplates {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(
    variables: UserMerchantPaymentPlanTemplatesQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantPaymentPlanTemplates);
  }

  public async getOne(
    variables: UserMerchantPaymentPlanTemplateQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantPaymentPlanTemplate;
  }

  public async syncOne(
    variables: UserMerchantPaymentPlanTemplateSyncOneMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLAN_TEMPLATES_SYNC_ONE_MUTATION,
      variables,
    });
    return data!.userMerchantPaymentPlanTemplateSyncOne;
  }
}

export { PaymentPlanTemplates };
