import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserAuthenticatorQueryVariables,
  UserAuthenticatorsQueryVariables,
  UserAuthenticatorRevokeMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  AUTHENTICATORS_GET_ONE_QUERY,
  AUTHENTICATORS_GET_ALL_QUERY,
  AUTHENTICATORS_REVOKE_MUTATION,
} from './queries';

import { Totp } from './totp';

class Authenticators {
  public readonly totp: Totp;

  constructor(private context: AccruPayMerchantAdminClientContext) {
    this.totp = new Totp(context);
  }

  public async getOne(variables: UserAuthenticatorQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: AUTHENTICATORS_GET_ONE_QUERY,
      variables,
    });
    return data.userAuthenticator;
  }

  public async getAll(variables: UserAuthenticatorsQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: AUTHENTICATORS_GET_ALL_QUERY,
      variables,
    });
    return parsePlainNodes(data.userAuthenticators);
  }

  public async revoke(variables: UserAuthenticatorRevokeMutationVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: AUTHENTICATORS_REVOKE_MUTATION,
      variables,
    });
    return data!.userAuthenticatorRevoke;
  }
}

export { Authenticators };
