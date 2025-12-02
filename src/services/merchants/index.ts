import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantEmailUpdateFinishMutationVariables,
  UserMerchantEmailUpdateStartMutationVariables,
  UserMerchantPhoneUpdateFinishMutationVariables,
  UserMerchantPhoneUpdateStartMutationVariables,
  UserMerchantCreateMutationVariables,
  UserMerchantQueryVariables,
  UserMerchantsQueryVariables,
  UserMerchantUpdateMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANTS_CREATE_MUTATION,
  MERCHANTS_EMAIL_VERIFY_OR_CHANGE_FINISH_MUTATION,
  MERCHANTS_EMAIL_VERIFY_OR_CHANGE_START_MUTATION,
  MERCHANTS_GET_MANY_QUERY,
  MERCHANTS_GET_ONE_QUERY,
  MERCHANTS_PHONE_VERIFY_OR_CHANGE_FINISH_MUTATION,
  MERCHANTS_PHONE_VERIFY_OR_CHANGE_START_MUTATION,
  MERCHANTS_UPDATE_MUTATION,
} from './queries';

class Merchants {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(variables: UserMerchantsQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANTS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchants);
  }

  public async getOne(variables: UserMerchantQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANTS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchant;
  }

  public async create(variables: UserMerchantCreateMutationVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANTS_CREATE_MUTATION,
      variables,
    });
    return data!.userMerchantCreate;
  }

  public async update(variables: UserMerchantUpdateMutationVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANTS_UPDATE_MUTATION,
      variables,
    });
    return data!.userMerchantUpdate;
  }

  public async emailVerifyOrChangeStart(
    variables: UserMerchantEmailUpdateStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANTS_EMAIL_VERIFY_OR_CHANGE_START_MUTATION,
      variables,
    });
    return data!.userMerchantEmailUpdateStart;
  }

  public async emailVerifyOrChangeFinish(
    variables: UserMerchantEmailUpdateFinishMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANTS_EMAIL_VERIFY_OR_CHANGE_FINISH_MUTATION,
      variables,
    });
    return data!.userMerchantEmailUpdateFinish;
  }

  public async phoneVerifyOrChangeStart(
    variables: UserMerchantPhoneUpdateStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANTS_PHONE_VERIFY_OR_CHANGE_START_MUTATION,
      variables,
    });
    return data!.userMerchantPhoneUpdateStart;
  }

  public async phoneVerifyOrChangeFinish(
    variables: UserMerchantPhoneUpdateFinishMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANTS_PHONE_VERIFY_OR_CHANGE_FINISH_MUTATION,
      variables,
    });
    return data!.userMerchantPhoneUpdateFinish;
  }
}
export { Merchants };
