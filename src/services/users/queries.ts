import { gql } from '@api/gql';

export const USERS_GET_CURRENT_QUERY = gql(`
  query User {
    user {
      ...UserFragment
    }
  }
`);

export const USERS_SIGN_UP_WITH_EMAIL_START_MUTATION = gql(`
  mutation UserSignUpWithEmailStart($data: UserSignUpWithEmailStartSchema!) {
    userSignUpWithEmailStart(data: $data)
  }
`);

export const USERS_SIGN_UP_WITH_EMAIL_VERIFY_MUTATION = gql(`
  mutation UserSignUpWithEmailVerify($data: UserSignUpWithEmailVerifySchema!) {
    userSignUpWithEmailVerify(data: $data)
  }
`);

export const USERS_SIGN_UP_WITH_EMAIL_FINISH_MUTATION = gql(`
  mutation UserSignUpWithEmailFinish($data: UserSignUpWithEmailFinishSchema!) {
    userSignUpWithEmailFinish(data: $data)
  }
`);

export const USERS_UPDATE_MUTATION = gql(`
  mutation UserUpdateData($data: UserUpdateDataSchema!) {
    userUpdateData(data: $data) {
      ...UserFragment
    }
  }
`);

export const USERS_SESSIONS_CLOSE_MUTATION = gql(`
  mutation UserSessionsClose {
    userSessionsClose
  }
`);

export const USERS_PASSWORD_CHANGE_START_MUTATION = gql(`
  mutation UserPasswordChangeStart {
    userPasswordChangeStart
  }
`);

export const USERS_PASSWORD_CHANGE_FINISH_MUTATION = gql(`
  mutation UserPasswordChangeFinish($data: UserPasswordChangeFinishSchema!) {
    userPasswordChangeFinish(data: $data)
  }
`);

export const USERS_EMAIL_VERIFY_OR_CHANGE_START_MUTATION = gql(`
  mutation UserEmailVerifyOrChangeStart($data: UserEmailVerifyOrChangeStartSchema!) {
    userEmailVerifyOrChangeStart(data: $data)
  }
`);

export const USERS_EMAIL_VERIFY_OR_CHANGE_FINISH_MUTATION = gql(`
  mutation UserEmailVerifyOrChangeFinish($data: UserEmailVerifyOrChangeFinishSchema!) {
    userEmailVerifyOrChangeFinish(data: $data) {
      ...UserFragment
    }
  }
`);

export const USERS_HANDLE_LOGIN_ATTEMPT_MUTATION = gql(`
  mutation UserHandleLoginAttempt($email: String!) {
    userHandleLoginAttempt(email: $email)
  }
`);

export const USERS_PASSWORD_RESET_START_MUTATION = gql(`
  mutation UserPasswordResetStart($data: UserPasswordResetStartSchema!) {
    userPasswordResetStart(data: $data)
  }
`);

export const USERS_PASSWORD_RESET_FINISH_MUTATION = gql(`
  mutation UserPasswordResetFinish($data: UserPasswordResetFinishSchema!) {
    userPasswordResetFinish(data: $data)
  }
`);
