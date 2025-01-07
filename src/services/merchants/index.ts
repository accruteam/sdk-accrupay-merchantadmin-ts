import { AccruPayMerchantAdminSdkContext } from '@/types/context.types';
import {
  UserMerchantsQuery,
  UserMerchantsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { MERCHANTS_GET_MANY_QUERY } from './queries';

class Merchants {
  constructor(private context: AccruPayMerchantAdminSdkContext) {}

  public async getMany(
    variables: UserMerchantsQueryVariables,
  ): Promise<Res<UserMerchantsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANTS_GET_MANY_QUERY,
      variables,
    });
    return data.userMerchants;
  }
}

export { Merchants };
