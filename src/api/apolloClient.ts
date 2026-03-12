import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  CombinedGraphQLErrors,
  ServerError,
} from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import { SetContextLink } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client/link/http';
import { withScalars } from 'apollo-link-scalars';
import { DateTimeISOResolver } from 'graphql-scalars';
import {
  GraphQLError,
  type GraphQLFormattedError,
  GraphQLScalarType,
  type IntrospectionQuery,
  Kind,
  buildClientSchema,
} from 'graphql';
import introspectionResult from './gql/schema.graphql.json' assert { type: 'json' };
import packageJson from '../../package.json' assert { type: 'json' };

const SDK_VERSION =
  typeof packageJson?.version === 'string' ? packageJson.version : null;

const AccruPayEnvironments = {
  production: 'https://api.pay.accru.co/graphql',
  qa: 'https://api.qa.pay.accru.co/graphql',
};

interface IAccruPayMerchantAdminClientParams {
  environment?: keyof typeof AccruPayEnvironments;

  /** Overrides the environment base URL */
  url?: string;

  getAuthToken?: () => Promise<string>;

  onAuthError?: () => void;
  onGraphQLError?: (errors: ReadonlyArray<GraphQLFormattedError>) => void;
  onNetworkError?: (error: ServerError | Error) => void;
}

if (!(BigInt.prototype as any).toJSON) {
  // eslint-disable-next-line func-names
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };
}

const BigIntScalar = new GraphQLScalarType({
  name: 'BigInt',
  description:
    'The `BigInt` scalar type represents non-fractional signed whole numeric values.',
  serialize(outputValue: any) {
    const bigint = BigInt(outputValue.toString());
    if (outputValue.toString() !== bigint.toString())
      throw new GraphQLError(`BigInt cannot represent value: ${outputValue}`);
    return bigint;
  },
  parseValue(inputValue: any) {
    const bigint = BigInt(inputValue.toString());
    if (inputValue.toString() !== bigint.toString())
      throw new GraphQLError(`BigInt cannot represent value: ${inputValue}`);
    return bigint;
  },
  parseLiteral(ast: any) {
    if (ast.kind !== Kind.INT && ast.kind !== Kind.STRING)
      throw new GraphQLError(
        `BigInt cannot represent non-integer value: ${ast}`,
      );
    try {
      const bigint = BigInt(ast.value);
      if (ast.value !== bigint.toString()) throw new Error();
      return bigint;
    } catch {
      throw new GraphQLError(`BigInt cannot represent value: ${ast.value}`);
    }
  },
  extensions: {
    codegenScalarType: 'bigint',
    jsonSchema: {
      type: 'integer',
      format: 'int64',
    },
  },
});

const schema = buildClientSchema(
  introspectionResult as unknown as IntrospectionQuery,
);

export const createApolloClient = ({
  environment,

  url,

  getAuthToken,

  onGraphQLError,
  onNetworkError,
  onAuthError,
}: IAccruPayMerchantAdminClientParams) => {
  const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      const errors = error.errors.map(e => ({
        ...e,
        validationErrors: (e.extensions as any)?.exception?.validationErrors,
      }));

      if (typeof onGraphQLError === 'function') onGraphQLError(errors);

      if (
        errors.some(e => e.extensions?.code === 'UNAUTHENTICATED') &&
        typeof onAuthError === 'function'
      )
        onAuthError();

      return;
    }

    if (ServerError.is(error)) {
      if (typeof onNetworkError === 'function') onNetworkError(error);
      return;
    }

    if (error && typeof onNetworkError === 'function') onNetworkError(error);
  });

  const scalarLink = withScalars({
    schema,
    typesMap: {
      BigInt: BigIntScalar,
      DateTimeISO: DateTimeISOResolver,
    },
  });

  const authLink = new SetContextLink(async prevContext => {
    const selectedToken =
      typeof getAuthToken === 'function'
        ? (await getAuthToken()) || null
        : null;

    return {
      headers: {
        ...(prevContext?.headers ?? {}),
        ...(selectedToken && {
          authorization: `Bearer ${selectedToken}`,
        }),
        ...(SDK_VERSION && {
          'accrupay-merchantadmin-sdk-version': SDK_VERSION,
        }),
      },
    };
  });

  const selectedEnvironmentUrl =
    AccruPayEnvironments[environment || 'production'];
  if (!selectedEnvironmentUrl && !url) throw new Error('Invalid environment.');

  const httpLink = new HttpLink({
    uri: url || selectedEnvironmentUrl,
  });

  return new ApolloClient({
    link: ApolloLink.from([errorLink, scalarLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      query: {
        fetchPolicy: 'no-cache',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });
};

export type { IAccruPayMerchantAdminClientParams };
export default createApolloClient;
