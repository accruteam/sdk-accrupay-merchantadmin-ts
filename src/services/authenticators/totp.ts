import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import {
  UserAuthenticatorTotpEnrollmentStartMutationVariables,
  UserAuthenticatorTotpEnrollmentConfirmMutationVariables,
  UserAuthenticatorTotpReplacementStartMutationVariables,
  UserAuthenticatorTotpReplacementConfirmMutationVariables,
} from '@api/gql/graphql';
import {
  AUTHENTICATORS_TOTP_ENROLLMENT_START_MUTATION,
  AUTHENTICATORS_TOTP_ENROLLMENT_CONFIRM_MUTATION,
  AUTHENTICATORS_TOTP_REPLACEMENT_START_MUTATION,
  AUTHENTICATORS_TOTP_REPLACEMENT_CONFIRM_MUTATION,
} from './queries';

class Totp {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async enrollmentStart(
    variables: UserAuthenticatorTotpEnrollmentStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: AUTHENTICATORS_TOTP_ENROLLMENT_START_MUTATION,
      variables,
    });
    return data!.userAuthenticatorTotpEnrollmentStart;
  }

  public async enrollmentConfirm(
    variables: UserAuthenticatorTotpEnrollmentConfirmMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: AUTHENTICATORS_TOTP_ENROLLMENT_CONFIRM_MUTATION,
      variables,
    });
    return data!.userAuthenticatorTotpEnrollmentConfirm;
  }

  public async replacementStart(
    variables: UserAuthenticatorTotpReplacementStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: AUTHENTICATORS_TOTP_REPLACEMENT_START_MUTATION,
      variables,
    });
    return data!.userAuthenticatorTotpReplacementStart;
  }

  public async replacementConfirm(
    variables: UserAuthenticatorTotpReplacementConfirmMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: AUTHENTICATORS_TOTP_REPLACEMENT_CONFIRM_MUTATION,
      variables,
    });
    return data!.userAuthenticatorTotpReplacementConfirm;
  }
}

export { Totp };
