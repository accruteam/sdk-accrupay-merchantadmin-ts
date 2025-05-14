import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantCreateMutation,
  UserMerchantCreateMutationVariables,
  UserMerchantQuery,
  UserMerchantQueryVariables,
  UserMerchantsQuery,
  UserMerchantsQueryVariables,
  UserMerchantUpdateMutation,
  UserMerchantUpdateMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANTS_CREATE_MUTATION,
  MERCHANTS_GET_MANY_QUERY,
  MERCHANTS_GET_ONE_QUERY,
  MERCHANTS_UPDATE_MUTATION,
} from './queries';

class Merchants {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(
    variables: UserMerchantsQueryVariables,
  ): Promise<Res<UserMerchantsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANTS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchants);
  }

  public async getOne(
    variables: UserMerchantQueryVariables,
  ): Promise<Res<UserMerchantQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANTS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchant;
  }

  public async create(
    variables: UserMerchantCreateMutationVariables,
  ): Promise<Res<UserMerchantCreateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANTS_CREATE_MUTATION,
      variables,
    });
    return data!.userMerchantCreate;
  }

  public async update(
    variables: UserMerchantUpdateMutationVariables,
  ): Promise<Res<UserMerchantUpdateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANTS_UPDATE_MUTATION,
      variables,
    });
    return data!.userMerchantUpdate;
  }
}
export { Merchants };
