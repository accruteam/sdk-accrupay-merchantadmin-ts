import { gql } from '@api/gql';

export const HEALTH_CHECKS_QUERY = gql(`
  query HealthCheck {
    healthCheck
  }
`);
