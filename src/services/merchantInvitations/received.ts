import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  UserReceivedMerchantInvitationAcceptMutationVariables,
  UserReceivedMerchantInvitationQueryVariables,
  UserReceivedMerchantInvitationRejectMutationVariables,
  UserReceivedMerchantInvitationsQueryVariables,
} from '@api/gql/graphql';
import {
  USER_RECEIVED_MERCHANT_INVITATIONS_ACCEPT_MUTATION,
  USER_RECEIVED_MERCHANT_INVITATIONS_GET_MANY_QUERY,
  USER_RECEIVED_MERCHANT_INVITATIONS_GET_ONE_QUERY,
  USER_RECEIVED_MERCHANT_INVITATIONS_REJECT_MUTATION,
} from './queries';

class UserReceivedMerchantInvitations {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(
    variables: UserReceivedMerchantInvitationsQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: USER_RECEIVED_MERCHANT_INVITATIONS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userReceivedMerchantInvitations);
  }

  public async getOne(variables: UserReceivedMerchantInvitationQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: USER_RECEIVED_MERCHANT_INVITATIONS_GET_ONE_QUERY,
      variables,
    });
    return data.userReceivedMerchantInvitation;
  }

  public async accept(
    variables: UserReceivedMerchantInvitationAcceptMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USER_RECEIVED_MERCHANT_INVITATIONS_ACCEPT_MUTATION,
      variables,
    });
    return data!.userReceivedMerchantInvitationAccept;
  }

  public async reject(
    variables: UserReceivedMerchantInvitationRejectMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USER_RECEIVED_MERCHANT_INVITATIONS_REJECT_MUTATION,
      variables,
    });
    return data!.userReceivedMerchantInvitationReject;
  }
}

export { UserReceivedMerchantInvitations };
