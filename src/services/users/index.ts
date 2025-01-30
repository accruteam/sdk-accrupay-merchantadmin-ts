import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserEmailVerifyOrChangeFinishMutation,
  UserEmailVerifyOrChangeFinishMutationVariables,
  UserEmailVerifyOrChangeStartMutation,
  UserEmailVerifyOrChangeStartMutationVariables,
  UserHandleLoginAttemptMutation,
  UserHandleLoginAttemptMutationVariables,
  UserPasswordChangeFinishMutation,
  UserPasswordChangeFinishMutationVariables,
  UserPasswordChangeStartMutation,
  UserPasswordChangeStartMutationVariables,
  UserPasswordResetFinishMutation,
  UserPasswordResetFinishMutationVariables,
  UserPasswordResetStartMutation,
  UserPasswordResetStartMutationVariables,
  UserQuery,
  UserQueryVariables,
  UserSessionsCloseMutation,
  UserSignUpWithEmailFinishMutation,
  UserSignUpWithEmailFinishMutationVariables,
  UserSignUpWithEmailStartMutation,
  UserSignUpWithEmailStartMutationVariables,
  UserSignUpWithEmailVerifyMutation,
  UserSignUpWithEmailVerifyMutationVariables,
  UserUpdateDataMutation,
  UserUpdateDataMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  USERS_EMAIL_VERIFY_OR_CHANGE_FINISH_MUTATION,
  USERS_EMAIL_VERIFY_OR_CHANGE_START_MUTATION,
  USERS_GET_CURRENT_QUERY,
  USERS_HANDLE_LOGIN_ATTEMPT_MUTATION,
  USERS_PASSWORD_CHANGE_FINISH_MUTATION,
  USERS_PASSWORD_CHANGE_START_MUTATION,
  USERS_PASSWORD_RESET_FINISH_MUTATION,
  USERS_PASSWORD_RESET_START_MUTATION,
  USERS_SESSIONS_CLOSE_MUTATION,
  USERS_SIGN_UP_WITH_EMAIL_FINISH_MUTATION,
  USERS_SIGN_UP_WITH_EMAIL_START_MUTATION,
  USERS_SIGN_UP_WITH_EMAIL_VERIFY_MUTATION,
  USERS_UPDATE_MUTATION,
} from './queries';

class Users {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async getCurrent(
    variables: UserQueryVariables,
  ): Promise<Res<UserQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: USERS_GET_CURRENT_QUERY,
      variables,
    });
    return data.user;
  }

  public async signUpWithEmailStart(
    variables: UserSignUpWithEmailStartMutationVariables,
  ): Promise<Res<UserSignUpWithEmailStartMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_SIGN_UP_WITH_EMAIL_START_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailStart;
  }

  public async signUpWithEmailVerify(
    variables: UserSignUpWithEmailVerifyMutationVariables,
  ): Promise<Res<UserSignUpWithEmailVerifyMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_SIGN_UP_WITH_EMAIL_VERIFY_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailVerify;
  }

  public async signUpWithEmailFinish(
    variables: UserSignUpWithEmailFinishMutationVariables,
  ): Promise<Res<UserSignUpWithEmailFinishMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_SIGN_UP_WITH_EMAIL_FINISH_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailFinish;
  }

  public async update(
    variables: UserUpdateDataMutationVariables,
  ): Promise<Res<UserUpdateDataMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_UPDATE_MUTATION,
      variables,
    });
    return data!.userUpdateData;
  }

  public async sessionsClose(): Promise<Res<UserSessionsCloseMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_SESSIONS_CLOSE_MUTATION,
    });
    return data!.userSessionsClose;
  }

  public async passwordChangeStart(
    variables: UserPasswordChangeStartMutationVariables,
  ): Promise<Res<UserPasswordChangeStartMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_PASSWORD_CHANGE_START_MUTATION,
      variables,
    });
    return data!.userPasswordChangeStart;
  }

  public async passwordChangeFinish(
    variables: UserPasswordChangeFinishMutationVariables,
  ): Promise<Res<UserPasswordChangeFinishMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_PASSWORD_CHANGE_FINISH_MUTATION,
      variables,
    });
    return data!.userPasswordChangeFinish;
  }

  public async emailVerifyOrChangeStart(
    variables: UserEmailVerifyOrChangeStartMutationVariables,
  ): Promise<Res<UserEmailVerifyOrChangeStartMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_EMAIL_VERIFY_OR_CHANGE_START_MUTATION,
      variables,
    });
    return data!.userEmailVerifyOrChangeStart;
  }

  public async emailVerifyOrChangeFinish(
    variables: UserEmailVerifyOrChangeFinishMutationVariables,
  ): Promise<Res<UserEmailVerifyOrChangeFinishMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_EMAIL_VERIFY_OR_CHANGE_FINISH_MUTATION,
      variables,
    });
    return data!.userEmailVerifyOrChangeFinish;
  }

  public async handleLoginAttempt(
    variables: UserHandleLoginAttemptMutationVariables,
  ): Promise<Res<UserHandleLoginAttemptMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_HANDLE_LOGIN_ATTEMPT_MUTATION,
      variables,
    });
    return data!.userHandleLoginAttempt;
  }

  public async passwordResetStart(
    variables: UserPasswordResetStartMutationVariables,
  ): Promise<Res<UserPasswordResetStartMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_PASSWORD_RESET_START_MUTATION,
      variables,
    });
    return data!.userPasswordResetStart;
  }

  public async passwordResetFinish(
    variables: UserPasswordResetFinishMutationVariables,
  ): Promise<Res<UserPasswordResetFinishMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_PASSWORD_RESET_FINISH_MUTATION,
      variables,
    });
    return data!.userPasswordResetFinish;
  }
}

export { Users };
