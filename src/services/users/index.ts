import { AccruPayMerchantAdminSdkContext } from '@/types/context.types';
import { UserQuery, UserQueryVariables } from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { USERS_GET_CURRENT_QUERY } from './queries';

class Users {
  constructor(private context: AccruPayMerchantAdminSdkContext) {}

  public async getCurrent(
    variables: UserQueryVariables,
  ): Promise<Res<UserQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: USERS_GET_CURRENT_QUERY,
      variables,
    });
    return data.user;
  }
}

export { Users };
