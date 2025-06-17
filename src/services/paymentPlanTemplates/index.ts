import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantPaymentPlanTemplateQuery,
  UserMerchantPaymentPlanTemplateQueryVariables,
  UserMerchantPaymentPlanTemplatesQuery,
  UserMerchantPaymentPlanTemplatesQueryVariables,
  UserMerchantPaymentPlanTemplateSyncOneMutation,
  UserMerchantPaymentPlanTemplateSyncOneMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
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
  ): Promise<Res<UserMerchantPaymentPlanTemplatesQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantPaymentPlanTemplates);
  }

  public async getOne(
    variables: UserMerchantPaymentPlanTemplateQueryVariables,
  ): Promise<Res<UserMerchantPaymentPlanTemplateQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantPaymentPlanTemplate;
  }

  public async syncOne(
    variables: UserMerchantPaymentPlanTemplateSyncOneMutationVariables,
  ): Promise<Res<UserMerchantPaymentPlanTemplateSyncOneMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLAN_TEMPLATES_SYNC_ONE_MUTATION,
      variables,
    });
    return data!.userMerchantPaymentPlanTemplateSyncOne;
  }
}

export { PaymentPlanTemplates };
