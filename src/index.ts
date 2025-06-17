import { ApolloClient } from '@apollo/client/core';

import {
  IAccruPayMerchantAdminClientParams,
  createApolloClient,
} from '@api/apolloClient';

import { HealthChecks } from '@services/healthChecks';
import { Users } from '@services/users';
import { Merchants } from '@services/merchants';
import { MerchantInvitations } from '@services/merchantInvitations';
import { Transactions } from '@services/transactions';
import { TransactionProviders } from '@services/transactionProviders';
import { CustomerPaymentMethods } from '@services/customerPaymentMethods';
import { PaymentPlans } from '@services/paymentPlans';
import { PaymentPlanTemplates } from '@services/paymentPlanTemplates';
import { TransactionProviderApplications } from '@services/transactionProviderApplications';

import { AccruPayMerchantAdminClientContext } from './types/context.types';

class AccruPayMerchantAdminClient {
  public readonly apolloClient: ApolloClient<unknown>;
  private readonly context: AccruPayMerchantAdminClientContext;

  public readonly healthChecks: HealthChecks;
  public readonly users: Users;
  public readonly merchants: Merchants;
  public readonly merchantInvitations: MerchantInvitations;

  public readonly transactions: Transactions;
  public readonly transactionProviders: TransactionProviders;
  public readonly customerPaymentMethods: CustomerPaymentMethods;
  public readonly paymentPlans: PaymentPlans;
  public readonly paymentPlanTemplates: PaymentPlanTemplates;
  public readonly transactionProviderApplications: TransactionProviderApplications;

  constructor(params: IAccruPayMerchantAdminClientParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.healthChecks = new HealthChecks(this.context);
    this.users = new Users(this.context);
    this.merchants = new Merchants(this.context);
    this.merchantInvitations = new MerchantInvitations(this.context);

    this.transactions = new Transactions(this.context);
    this.transactionProviders = new TransactionProviders(this.context);
    this.customerPaymentMethods = new CustomerPaymentMethods(this.context);
    this.paymentPlans = new PaymentPlans(this.context);
    this.paymentPlanTemplates = new PaymentPlanTemplates(this.context);
    this.transactionProviderApplications = new TransactionProviderApplications(
      this.context,
    );
  }
}

export { AccruPayMerchantAdminClientResponseType } from '@utils/response.type';

export * from '@gql';
export * from '@gql/graphql';

export { AccruPayMerchantAdminClient };
export default AccruPayMerchantAdminClient;
