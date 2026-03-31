import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  AdminMerchantsQuery,
  AdminMerchantsQueryVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';

import { ADMIN_MERCHANTS_GET_QUERY } from './adminMerchants.queries';

class AdminMerchants {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async get(variables: AdminMerchantsQueryVariables) {
    const { data } = await this.context.apolloClient.query<AdminMerchantsQuery>(
      {
        query: ADMIN_MERCHANTS_GET_QUERY,
        variables,
      },
    );

    return parsePlainNodes(data!.adminMerchants);
  }
}

export { AdminMerchants };
