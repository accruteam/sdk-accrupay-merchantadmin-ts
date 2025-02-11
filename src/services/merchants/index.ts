import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantsQuery,
  UserMerchantsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import { MERCHANTS_GET_MANY_QUERY } from './queries';

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
}

export { Merchants };
