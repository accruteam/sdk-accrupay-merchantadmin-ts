import { AccruPayMerchantAdminClientContext } from '@/types/context.types';
import { HealthCheckQuery, HealthCheckQueryVariables } from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { HEALTH_CHECKS_QUERY } from './queries';

class HealthChecks {
  constructor(private context: AccruPayMerchantAdminClientContext) {}

  public async check(
    variables: HealthCheckQueryVariables,
  ): Promise<Res<HealthCheckQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: HEALTH_CHECKS_QUERY,
      variables,
    });
    return data.healthCheck;
  }
}

export { HealthChecks };
