import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserEmailVerifyOrChangeFinishMutationVariables,
  UserEmailVerifyOrChangeStartMutationVariables,
  UserHandleLoginAttemptMutationVariables,
  UserPasswordChangeFinishMutationVariables,
  UserPasswordChangeStartMutationVariables,
  UserPasswordResetFinishMutationVariables,
  UserPasswordResetStartMutationVariables,
  UserQueryVariables,
  UserSignUpWithEmailFinishMutationVariables,
  UserSignUpWithEmailStartMutationVariables,
  UserSignUpWithEmailVerifyMutationVariables,
  UserUpdateDataMutationVariables,
} from '@api/gql/graphql';
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

  public async getCurrent(variables: UserQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: USERS_GET_CURRENT_QUERY,
      variables,
    });
    return data.user;
  }

  public async signUpWithEmailStart(
    variables: UserSignUpWithEmailStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_SIGN_UP_WITH_EMAIL_START_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailStart;
  }

  public async signUpWithEmailVerify(
    variables: UserSignUpWithEmailVerifyMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_SIGN_UP_WITH_EMAIL_VERIFY_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailVerify;
  }

  public async signUpWithEmailFinish(
    variables: UserSignUpWithEmailFinishMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_SIGN_UP_WITH_EMAIL_FINISH_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailFinish;
  }

  public async update(variables: UserUpdateDataMutationVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_UPDATE_MUTATION,
      variables,
    });
    return data!.userUpdateData;
  }

  public async sessionsClose() {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_SESSIONS_CLOSE_MUTATION,
    });
    return data!.userSessionsClose;
  }

  public async passwordChangeStart(
    variables: UserPasswordChangeStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_PASSWORD_CHANGE_START_MUTATION,
      variables,
    });
    return data!.userPasswordChangeStart;
  }

  public async passwordChangeFinish(
    variables: UserPasswordChangeFinishMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_PASSWORD_CHANGE_FINISH_MUTATION,
      variables,
    });
    return data!.userPasswordChangeFinish;
  }

  public async emailVerifyOrChangeStart(
    variables: UserEmailVerifyOrChangeStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_EMAIL_VERIFY_OR_CHANGE_START_MUTATION,
      variables,
    });
    return data!.userEmailVerifyOrChangeStart;
  }

  public async emailVerifyOrChangeFinish(
    variables: UserEmailVerifyOrChangeFinishMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_EMAIL_VERIFY_OR_CHANGE_FINISH_MUTATION,
      variables,
    });
    return data!.userEmailVerifyOrChangeFinish;
  }

  public async handleLoginAttempt(
    variables: UserHandleLoginAttemptMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_HANDLE_LOGIN_ATTEMPT_MUTATION,
      variables,
    });
    return data!.userHandleLoginAttempt;
  }

  public async passwordResetStart(
    variables: UserPasswordResetStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_PASSWORD_RESET_START_MUTATION,
      variables,
    });
    return data!.userPasswordResetStart;
  }

  public async passwordResetFinish(
    variables: UserPasswordResetFinishMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: USERS_PASSWORD_RESET_FINISH_MUTATION,
      variables,
    });
    return data!.userPasswordResetFinish;
  }
}

export { Users };
