import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserMerchantSentInvitationCancelMutation,
  UserMerchantSentInvitationCancelMutationVariables,
  UserMerchantSentInvitationCreateMutation,
  UserMerchantSentInvitationCreateMutationVariables,
  UserMerchantSentInvitationQuery,
  UserMerchantSentInvitationQueryVariables,
  UserMerchantSentInvitationsQuery,
  UserMerchantSentInvitationsQueryVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import { Res } from '@utils/response.type';
import {
  MERCHANT_SENT_INVITATIONS_CANCEL_MUTATION,
  MERCHANT_SENT_INVITATIONS_CREATE_MUTATION,
  MERCHANT_SENT_INVITATIONS_GET_MANY_QUERY,
  MERCHANT_SENT_INVITATIONS_GET_ONE_QUERY,
} from './queries';

class MerchantSentInvitations {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getMany(
    variables: UserMerchantSentInvitationsQueryVariables,
  ): Promise<Res<UserMerchantSentInvitationsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_SENT_INVITATIONS_GET_MANY_QUERY,
      variables,
    });
    return parsePlainNodes(data.userMerchantSentInvitations);
  }

  public async getOne(
    variables: UserMerchantSentInvitationQueryVariables,
  ): Promise<Res<UserMerchantSentInvitationQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_SENT_INVITATIONS_GET_ONE_QUERY,
      variables,
    });
    return data.userMerchantSentInvitation;
  }

  public async create(
    variables: UserMerchantSentInvitationCreateMutationVariables,
  ): Promise<Res<UserMerchantSentInvitationCreateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_SENT_INVITATIONS_CREATE_MUTATION,
      variables,
    });
    return data!.userMerchantSentInvitationCreate;
  }

  public async cancel(
    variables: UserMerchantSentInvitationCancelMutationVariables,
  ): Promise<Res<UserMerchantSentInvitationCancelMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_SENT_INVITATIONS_CANCEL_MUTATION,
      variables,
    });
    return data!.userMerchantSentInvitationCancel;
  }
}

export { MerchantSentInvitations };
