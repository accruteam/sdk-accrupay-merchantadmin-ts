/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** Cursor for pagination */
  ConnectionCursor: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AdminMerchantCreateSchema = {
  addressCity: Scalars['String']['input'];
  addressCountry: COUNTRY_ISO_2;
  addressLine1: Scalars['String']['input'];
  addressLine2: Scalars['String']['input'];
  addressPostalCode: Scalars['String']['input'];
  addressState: Scalars['String']['input'];
  email: Scalars['String']['input'];
  entityType: ENTITY_TYPE;
  industry: Scalars['String']['input'];
  legalAddressCity: Scalars['String']['input'];
  legalAddressCountry: COUNTRY_ISO_2;
  legalAddressLine1: Scalars['String']['input'];
  legalAddressLine2: Scalars['String']['input'];
  legalAddressPostalCode: Scalars['String']['input'];
  legalAddressState: Scalars['String']['input'];
  legalIdentifier: Scalars['String']['input'];
  legalIdentifierType: LEGAL_IDENTIFIER_TYPE;
  locale?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  primaryContactEmail: Scalars['String']['input'];
  primaryContactName: Scalars['String']['input'];
  primaryContactPhone: Scalars['String']['input'];
  timezone?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AdminMerchantTransactionProviderCreateSchema = {
  credentials: Scalars['JSON']['input'];
  merchantId: Scalars['String']['input'];
  provider: TRANSACTION_PROVIDER;
  status: MERCHANT_TRANSACTION_PROVIDER_STATUS;
};

export type AdminMerchantTransactionProviderUpdateSchema = {
  credentials?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
};

export type AdminMerchantUpdateSchema = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<ENTITY_TYPE>;
  industry?: InputMaybe<Scalars['String']['input']>;
  legalAddressCity?: InputMaybe<Scalars['String']['input']>;
  legalAddressCountry?: InputMaybe<COUNTRY_ISO_2>;
  legalAddressLine1?: InputMaybe<Scalars['String']['input']>;
  legalAddressLine2?: InputMaybe<Scalars['String']['input']>;
  legalAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  legalAddressState?: InputMaybe<Scalars['String']['input']>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  primaryContactEmail?: InputMaybe<Scalars['String']['input']>;
  primaryContactName?: InputMaybe<Scalars['String']['input']>;
  primaryContactPhone?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AdminMerchantUserCreateSchema = {
  isEnabled: Scalars['Boolean']['input'];
  role: MERCHANT_USER_ROLE;
  userId: Scalars['String']['input'];
};

export type AdminMerchantUserUpdateSchema = {
  isEnabled: Scalars['Boolean']['input'];
  role: MERCHANT_USER_ROLE;
};

export type BillingDataSchema = {
  billingAddressCity?: InputMaybe<Scalars['String']['input']>;
  /** Country using the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g. US, UK, etc.). */
  billingAddressCountry: COUNTRY_ISO_2;
  billingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  billingAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  /** State using the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format for main country subdivisions, provinces, states (e.g. [for US] → NY, IN, CA, etc.). The [iso-3166-2](https://www.npmjs.com/package/iso-3166-2) package is suggested. */
  billingAddressState?: InputMaybe<Scalars['String']['input']>;
  billingEmail: Scalars['String']['input'];
  billingFirstName: Scalars['String']['input'];
  billingLastName: Scalars['String']['input'];
  billingPhone?: InputMaybe<Scalars['String']['input']>;
};

export enum COUNTRY_ISO_2 {
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AO = 'AO',
  AQ = 'AQ',
  AR = 'AR',
  AS = 'AS',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BV = 'BV',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FM = 'FM',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GU = 'GU',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HM = 'HM',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MH = 'MH',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  PW = 'PW',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VI = 'VI',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW'
}

export enum CURRENCY {
  EUR = 'EUR',
  USD = 'USD'
}

export enum ENTITY_TYPE {
  COMPANY = 'COMPANY',
  INDIVIDUAL = 'INDIVIDUAL'
}

export type ErrorLog = {
  __typename?: 'ErrorLog';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  debug?: Maybe<Scalars['JSON']['output']>;
  environment?: Maybe<Scalars['String']['output']>;
  handler?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  merchantId?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  method?: Maybe<Scalars['String']['output']>;
  operation?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  requestAgentInfo?: Maybe<Scalars['JSON']['output']>;
  requestContext?: Maybe<Scalars['JSON']['output']>;
  requestData?: Maybe<Scalars['JSON']['output']>;
  resolvedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  resolvedByEmail?: Maybe<Scalars['String']['output']>;
  responseContext?: Maybe<Scalars['JSON']['output']>;
  responseData?: Maybe<Scalars['JSON']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  stack?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userEmail?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ErrorLogPaginationConnection = {
  __typename?: 'ErrorLogPaginationConnection';
  edges: Array<ErrorLogPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ErrorLogPaginationEdge = {
  __typename?: 'ErrorLogPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: ErrorLog;
};

export enum LEGAL_IDENTIFIER_TYPE {
  EIN = 'EIN',
  ITIN = 'ITIN',
  SSN = 'SSN'
}

export enum MERCHANT_STATUS {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  PENDING = 'PENDING'
}

export enum MERCHANT_TRANSACTION_PROVIDER_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export enum MERCHANT_USER_ROLE {
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
  OWNER = 'OWNER',
  VIEWER = 'VIEWER'
}

export type Merchant = {
  __typename?: 'Merchant';
  addressCity?: Maybe<Scalars['String']['output']>;
  addressCountry?: Maybe<COUNTRY_ISO_2>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressPostalCode?: Maybe<Scalars['String']['output']>;
  addressState?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerificationId?: Maybe<Scalars['String']['output']>;
  entityType: ENTITY_TYPE;
  id: Scalars['ID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  legalAddressCity?: Maybe<Scalars['String']['output']>;
  legalAddressCountry?: Maybe<COUNTRY_ISO_2>;
  legalAddressLine1?: Maybe<Scalars['String']['output']>;
  legalAddressLine2?: Maybe<Scalars['String']['output']>;
  legalAddressPostalCode?: Maybe<Scalars['String']['output']>;
  legalAddressState?: Maybe<Scalars['String']['output']>;
  legalIdentifier?: Maybe<Scalars['String']['output']>;
  legalIdentifierType?: Maybe<LEGAL_IDENTIFIER_TYPE>;
  locale?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  phoneVerificationId?: Maybe<Scalars['String']['output']>;
  primaryContactEmail?: Maybe<Scalars['String']['output']>;
  primaryContactName?: Maybe<Scalars['String']['output']>;
  primaryContactPhone?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['String']['output']>;
  publicIdUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: MERCHANT_STATUS;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type MerchantApiClientTransactionPaymentStartSchema = {
  amount: Scalars['BigInt']['input'];
  billing: BillingDataSchema;
  currency: CURRENCY;
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalTransactionCode: Scalars['String']['input'];
  storePaymentMethod: Scalars['Boolean']['input'];
};

export type MerchantApiKey = {
  __typename?: 'MerchantApiKey';
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['String']['output'];
  secret: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantApiKeyPaginationConnection = {
  __typename?: 'MerchantApiKeyPaginationConnection';
  edges: Array<MerchantApiKeyPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantApiKeyPaginationEdge = {
  __typename?: 'MerchantApiKeyPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantApiKey;
};

export type MerchantClientTransactionGenericPreSessionData = {
  __typename?: 'MerchantClientTransactionGenericPreSessionData';
  provider: TRANSACTION_PROVIDER;
  publicKey?: Maybe<Scalars['String']['output']>;
};

export type MerchantClientTransactionNuveiPreSessionData = {
  __typename?: 'MerchantClientTransactionNuveiPreSessionData';
  environment: Scalars['String']['output'];
  merchantId: Scalars['String']['output'];
  merchantSiteId: Scalars['String']['output'];
  provider: TRANSACTION_PROVIDER;
};

export type MerchantClientTransactionPreSessionData = MerchantClientTransactionGenericPreSessionData | MerchantClientTransactionNuveiPreSessionData;

export type MerchantCreateSchema = {
  addressCity: Scalars['String']['input'];
  addressCountry: COUNTRY_ISO_2;
  addressLine1: Scalars['String']['input'];
  addressLine2: Scalars['String']['input'];
  addressPostalCode: Scalars['String']['input'];
  addressState: Scalars['String']['input'];
  email: Scalars['String']['input'];
  entityType: ENTITY_TYPE;
  industry: Scalars['String']['input'];
  legalAddressCity: Scalars['String']['input'];
  legalAddressCountry: COUNTRY_ISO_2;
  legalAddressLine1: Scalars['String']['input'];
  legalAddressLine2: Scalars['String']['input'];
  legalAddressPostalCode: Scalars['String']['input'];
  legalAddressState: Scalars['String']['input'];
  legalIdentifier: Scalars['String']['input'];
  legalIdentifierType: LEGAL_IDENTIFIER_TYPE;
  locale?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  primaryContactEmail: Scalars['String']['input'];
  primaryContactName: Scalars['String']['input'];
  primaryContactPhone: Scalars['String']['input'];
  timezone?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type MerchantCustomerPaymentMethod = {
  __typename?: 'MerchantCustomerPaymentMethod';
  billingAddressCity?: Maybe<Scalars['String']['output']>;
  billingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  billingAddressState?: Maybe<Scalars['String']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  billingFirstName?: Maybe<Scalars['String']['output']>;
  billingLastName?: Maybe<Scalars['String']['output']>;
  billingPhone?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  merchantInternalCustomerCode: Scalars['String']['output'];
  methodType: PAYMENT_METHOD;
  paymentMethodInfo?: Maybe<MerchantCustomerPaymentMethodInfo>;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_METHOD_STATUS;
  transactionProviderId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantCustomerPaymentMethodCreditCardInfo = {
  __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo';
  cardBrand?: Maybe<Scalars['String']['output']>;
  cardNumberMasked?: Maybe<Scalars['String']['output']>;
  methodType: PAYMENT_METHOD;
};

export type MerchantCustomerPaymentMethodGenericInfo = {
  __typename?: 'MerchantCustomerPaymentMethodGenericInfo';
  methodType: PAYMENT_METHOD;
};

export type MerchantCustomerPaymentMethodInfo = MerchantCustomerPaymentMethodCreditCardInfo | MerchantCustomerPaymentMethodGenericInfo;

export type MerchantCustomerPaymentMethodPaginationConnection = {
  __typename?: 'MerchantCustomerPaymentMethodPaginationConnection';
  edges: Array<MerchantCustomerPaymentMethodPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantCustomerPaymentMethodPaginationEdge = {
  __typename?: 'MerchantCustomerPaymentMethodPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantCustomerPaymentMethod;
};

export type MerchantPaginationConnection = {
  __typename?: 'MerchantPaginationConnection';
  edges: Array<MerchantPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaginationEdge = {
  __typename?: 'MerchantPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Merchant;
};

export type MerchantPaymentPlan = {
  __typename?: 'MerchantPaymentPlan';
  amount: Scalars['BigInt']['output'];
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  currentPeriodEnd: Scalars['DateTimeISO']['output'];
  currentPeriodStart: Scalars['DateTimeISO']['output'];
  endsAfterDays: Scalars['Int']['output'];
  endsAfterMonths: Scalars['Int']['output'];
  endsAfterYears: Scalars['Int']['output'];
  endsAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  initialAmount: Scalars['BigInt']['output'];
  merchantInternalCustomerCode: Scalars['String']['output'];
  merchantInternalPaymentPlanCode: Scalars['String']['output'];
  merchantInternalPaymentPlanDescription?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  paymentMethod: MerchantCustomerPaymentMethod;
  paymentMethodId: Scalars['String']['output'];
  periodCount: Scalars['Int']['output'];
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_PLAN_STATUS;
  renewalIntervalDays: Scalars['Int']['output'];
  renewalIntervalMonths: Scalars['Int']['output'];
  renewalIntervalYears: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: PAYMENT_PLAN_STATUS;
  template?: Maybe<MerchantPaymentPlanTemplate>;
  templateId?: Maybe<Scalars['String']['output']>;
  timeAnchor: Scalars['DateTimeISO']['output'];
  transactionProvider: MerchantTransactionProvider;
  transactionProviderId: Scalars['String']['output'];
  transactions: Array<MerchantTransaction>;
  trialEndsAt: Scalars['DateTimeISO']['output'];
  trialPeriodDays: Scalars['Int']['output'];
  trialPeriodMonths: Scalars['Int']['output'];
  trialPeriodYears: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantPaymentPlanCreateSchema = {
  amount: Scalars['BigInt']['input'];
  currency: CURRENCY;
  endsAfterDays: Scalars['Int']['input'];
  endsAfterMonths: Scalars['Int']['input'];
  endsAfterYears: Scalars['Int']['input'];
  initialAmount: Scalars['BigInt']['input'];
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalPaymentPlanCode: Scalars['String']['input'];
  merchantInternalPaymentPlanDescription?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId: Scalars['String']['input'];
  renewalIntervalDays: Scalars['Int']['input'];
  renewalIntervalMonths: Scalars['Int']['input'];
  renewalIntervalYears: Scalars['Int']['input'];
  templateId: Scalars['String']['input'];
  trialPeriodDays: Scalars['Int']['input'];
  trialPeriodMonths: Scalars['Int']['input'];
  trialPeriodYears: Scalars['Int']['input'];
};

export type MerchantPaymentPlanPaginationConnection = {
  __typename?: 'MerchantPaymentPlanPaginationConnection';
  edges: Array<MerchantPaymentPlanPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaymentPlanPaginationEdge = {
  __typename?: 'MerchantPaymentPlanPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantPaymentPlan;
};

export type MerchantPaymentPlanTemplate = {
  __typename?: 'MerchantPaymentPlanTemplate';
  amount: Scalars['BigInt']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  description?: Maybe<Scalars['String']['output']>;
  endsAfterDays: Scalars['Int']['output'];
  endsAfterMonths: Scalars['Int']['output'];
  endsAfterYears: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  initialAmount: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  payload: Scalars['JSON']['output'];
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS;
  renewalIntervalDays: Scalars['Int']['output'];
  renewalIntervalMonths: Scalars['Int']['output'];
  renewalIntervalYears: Scalars['Int']['output'];
  transactionProviderId: Scalars['String']['output'];
  trialPeriodDays: Scalars['Int']['output'];
  trialPeriodMonths: Scalars['Int']['output'];
  trialPeriodYears: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantPaymentPlanTemplateCreateSchema = {
  amount: Scalars['BigInt']['input'];
  currency: CURRENCY;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAfterDays: Scalars['Int']['input'];
  endsAfterMonths: Scalars['Int']['input'];
  endsAfterYears: Scalars['Int']['input'];
  initialAmount: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS;
  renewalIntervalDays: Scalars['Int']['input'];
  renewalIntervalMonths: Scalars['Int']['input'];
  renewalIntervalYears: Scalars['Int']['input'];
  trialPeriodDays: Scalars['Int']['input'];
  trialPeriodMonths: Scalars['Int']['input'];
  trialPeriodYears: Scalars['Int']['input'];
};

export type MerchantPaymentPlanTemplatePaginationConnection = {
  __typename?: 'MerchantPaymentPlanTemplatePaginationConnection';
  edges: Array<MerchantPaymentPlanTemplatePaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaymentPlanTemplatePaginationEdge = {
  __typename?: 'MerchantPaymentPlanTemplatePaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantPaymentPlanTemplate;
};

export type MerchantPaymentPlanTemplateUpdateSchema = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  currency?: InputMaybe<CURRENCY>;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAfterDays?: InputMaybe<Scalars['Int']['input']>;
  endsAfterMonths?: InputMaybe<Scalars['Int']['input']>;
  endsAfterYears?: InputMaybe<Scalars['Int']['input']>;
  initialAmount?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_TEMPLATE_STATUS>;
  renewalIntervalDays?: InputMaybe<Scalars['Int']['input']>;
  renewalIntervalMonths?: InputMaybe<Scalars['Int']['input']>;
  renewalIntervalYears?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodDays?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodMonths?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodYears?: InputMaybe<Scalars['Int']['input']>;
};

export type MerchantTransaction = {
  __typename?: 'MerchantTransaction';
  action: TRANSACTION_ACTION;
  amount: Scalars['BigInt']['output'];
  billingAddressCity?: Maybe<Scalars['String']['output']>;
  billingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  billingAddressState?: Maybe<Scalars['String']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  billingFirstName?: Maybe<Scalars['String']['output']>;
  billingLastName?: Maybe<Scalars['String']['output']>;
  billingPhone?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  disputedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  failedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  merchantInternalCustomerCode?: Maybe<Scalars['String']['output']>;
  merchantInternalTransactionCode?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  paymentMethod?: Maybe<MerchantCustomerPaymentMethod>;
  paymentMethodCode?: Maybe<Scalars['String']['output']>;
  paymentMethodId?: Maybe<Scalars['String']['output']>;
  paymentMethodType?: Maybe<PAYMENT_METHOD>;
  paymentPlan?: Maybe<MerchantPaymentPlan>;
  paymentPlanId?: Maybe<Scalars['String']['output']>;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerRelatedCode?: Maybe<Scalars['String']['output']>;
  providerStatus: TRANSACTION_STATUS;
  refundedAmount?: Maybe<Scalars['BigInt']['output']>;
  refundedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  relatedTransaction?: Maybe<MerchantTransaction>;
  relatedTransactionId?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: TRANSACTION_STATUS;
  storePaymentMethod?: Maybe<Scalars['Boolean']['output']>;
  succeededAt?: Maybe<Scalars['DateTimeISO']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  transactionDate: Scalars['DateTimeISO']['output'];
  transactionError?: Maybe<Scalars['String']['output']>;
  transactionProvider: MerchantTransactionProvider;
  transactionProviderId: Scalars['String']['output'];
  transactionsRelated?: Maybe<Array<MerchantTransaction>>;
  updatedAt: Scalars['DateTimeISO']['output'];
  voidedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MerchantTransactionPaginationConnection = {
  __typename?: 'MerchantTransactionPaginationConnection';
  edges: Array<MerchantTransactionPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantTransactionPaginationEdge = {
  __typename?: 'MerchantTransactionPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantTransaction;
};

export type MerchantTransactionProvider = {
  __typename?: 'MerchantTransactionProvider';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['String']['output'];
  provider: TRANSACTION_PROVIDER;
  providerCode: Scalars['String']['output'];
  status: MERCHANT_TRANSACTION_PROVIDER_STATUS;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantTransactionProviderPaginationConnection = {
  __typename?: 'MerchantTransactionProviderPaginationConnection';
  edges: Array<MerchantTransactionProviderPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantTransactionProviderPaginationEdge = {
  __typename?: 'MerchantTransactionProviderPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantTransactionProvider;
};

export type MerchantUpdateSchema = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  legalAddressCity?: InputMaybe<Scalars['String']['input']>;
  legalAddressCountry?: InputMaybe<COUNTRY_ISO_2>;
  legalAddressLine1?: InputMaybe<Scalars['String']['input']>;
  legalAddressLine2?: InputMaybe<Scalars['String']['input']>;
  legalAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  legalAddressState?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryContactEmail?: InputMaybe<Scalars['String']['input']>;
  primaryContactName?: InputMaybe<Scalars['String']['input']>;
  primaryContactPhone?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type MerchantUser = {
  __typename?: 'MerchantUser';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  invitationId?: Maybe<Scalars['String']['output']>;
  isEnabled: Scalars['Boolean']['output'];
  merchant: Merchant;
  merchantId: Scalars['String']['output'];
  role: MERCHANT_USER_ROLE;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type MerchantUserInvitation = {
  __typename?: 'MerchantUserInvitation';
  acceptedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdByMerchantUserId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['String']['output'];
  rejectedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  role: MERCHANT_USER_ROLE;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantUserInvitationCreateSchema = {
  email: Scalars['String']['input'];
  expiresAt: Scalars['DateTimeISO']['input'];
  role: MERCHANT_USER_ROLE;
};

export type MerchantUserInvitationPaginationConnection = {
  __typename?: 'MerchantUserInvitationPaginationConnection';
  edges: Array<MerchantUserInvitationPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantUserInvitationPaginationEdge = {
  __typename?: 'MerchantUserInvitationPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantUserInvitation;
};

export type MerchantUserPaginationConnection = {
  __typename?: 'MerchantUserPaginationConnection';
  edges: Array<MerchantUserPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantUserPaginationEdge = {
  __typename?: 'MerchantUserPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantUser;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminErrorLogMarkAllAsResolved: Scalars['DateTimeISO']['output'];
  adminErrorLogMarkAsResolved: ErrorLog;
  adminMerchantApiKeyCreate: MerchantApiKey;
  adminMerchantApiKeyDelete: Scalars['DateTimeISO']['output'];
  adminMerchantCreate: Merchant;
  adminMerchantResetPublicId: Merchant;
  adminMerchantTransactionProviderCreate: MerchantTransactionProvider;
  adminMerchantTransactionProviderUpdate: MerchantTransactionProvider;
  adminMerchantUpdate: Merchant;
  adminMerchantUpdateStatus: Merchant;
  adminMerchantUserCreate: MerchantUser;
  adminMerchantUserUpdate: MerchantUser;
  merchantApiClientTransactionPaymentSessionStart: MerchantTransaction;
  merchantApiClientTransactionPaymentSessionVerify: MerchantTransaction;
  merchantApiCustomerPaymentMethodSyncAll: Array<MerchantCustomerPaymentMethod>;
  merchantApiCustomerPaymentMethodSyncOne: MerchantCustomerPaymentMethod;
  merchantApiPaymentPlanCancel: MerchantPaymentPlan;
  merchantApiPaymentPlanCreate: MerchantPaymentPlan;
  merchantApiPaymentPlanSyncAll: Array<MerchantPaymentPlan>;
  merchantApiPaymentPlanSyncOne: MerchantPaymentPlan;
  merchantApiPaymentPlanTemplateCreate: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplateSyncAll: Array<MerchantPaymentPlanTemplate>;
  merchantApiPaymentPlanTemplateSyncOne: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplateUpdate: MerchantPaymentPlanTemplate;
  merchantApiTransactionRefund: MerchantTransaction;
  merchantApiTransactionSyncOne: MerchantTransaction;
  merchantApiTransactionVoid: MerchantTransaction;
  userEmailVerifyOrChangeFinish: User;
  userEmailVerifyOrChangeStart: Scalars['DateTimeISO']['output'];
  userHandleLoginAttempt: Scalars['DateTimeISO']['output'];
  userMerchantCreate: MerchantUser;
  userMerchantSentInvitationCancel: MerchantUserInvitation;
  userMerchantSentInvitationCreate: MerchantUserInvitation;
  userMerchantUpdate: Merchant;
  userPasswordChangeFinish: Scalars['String']['output'];
  userPasswordChangeStart: Scalars['DateTimeISO']['output'];
  userPasswordResetFinish: Scalars['String']['output'];
  userPasswordResetStart: Scalars['String']['output'];
  userReceivedMerchantInvitationAccept: MerchantUserInvitation;
  userReceivedMerchantInvitationReject: MerchantUserInvitation;
  userSessionsClose: Scalars['DateTimeISO']['output'];
  /** This method is used to finish the user sign up process. The string returned is the authentication provider custom token, use it to log in. */
  userSignUpWithEmailFinish: Scalars['String']['output'];
  userSignUpWithEmailStart: Scalars['DateTimeISO']['output'];
  userSignUpWithEmailVerify: Scalars['DateTimeISO']['output'];
  userUpdateData: User;
};


export type MutationadminErrorLogMarkAsResolvedArgs = {
  errorLogId: Scalars['String']['input'];
};


export type MutationadminMerchantApiKeyCreateArgs = {
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantApiKeyDeleteArgs = {
  merchantApiKeyId: Scalars['String']['input'];
};


export type MutationadminMerchantCreateArgs = {
  data: AdminMerchantCreateSchema;
};


export type MutationadminMerchantResetPublicIdArgs = {
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantTransactionProviderCreateArgs = {
  data: AdminMerchantTransactionProviderCreateSchema;
};


export type MutationadminMerchantTransactionProviderUpdateArgs = {
  data: AdminMerchantTransactionProviderUpdateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationadminMerchantUpdateArgs = {
  data: AdminMerchantUpdateSchema;
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantUpdateStatusArgs = {
  merchantId: Scalars['String']['input'];
  status: MERCHANT_STATUS;
};


export type MutationadminMerchantUserCreateArgs = {
  data: AdminMerchantUserCreateSchema;
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantUserUpdateArgs = {
  data: AdminMerchantUserUpdateSchema;
  merchantUserId: Scalars['String']['input'];
};


export type MutationmerchantApiClientTransactionPaymentSessionStartArgs = {
  data: MerchantApiClientTransactionPaymentStartSchema;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type MutationmerchantApiClientTransactionPaymentSessionVerifyArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiCustomerPaymentMethodSyncAllArgs = {
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiCustomerPaymentMethodSyncOneArgs = {
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanCancelArgs = {
  merchantPaymentPlanId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanCreateArgs = {
  data: MerchantPaymentPlanCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanSyncAllArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanSyncOneArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateCreateArgs = {
  data: MerchantPaymentPlanTemplateCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateSyncAllArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateSyncOneArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateUpdateArgs = {
  data: MerchantPaymentPlanTemplateUpdateSchema;
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiTransactionRefundArgs = {
  amount: Scalars['BigInt']['input'];
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiTransactionSyncOneArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiTransactionVoidArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserEmailVerifyOrChangeFinishArgs = {
  data: UserEmailVerifyOrChangeFinishSchema;
};


export type MutationuserEmailVerifyOrChangeStartArgs = {
  data: UserEmailVerifyOrChangeStartSchema;
};


export type MutationuserHandleLoginAttemptArgs = {
  email: Scalars['String']['input'];
};


export type MutationuserMerchantCreateArgs = {
  data: MerchantCreateSchema;
};


export type MutationuserMerchantSentInvitationCancelArgs = {
  invitationId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantSentInvitationCreateArgs = {
  data: MerchantUserInvitationCreateSchema;
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantUpdateArgs = {
  data: MerchantUpdateSchema;
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserPasswordChangeFinishArgs = {
  data: UserPasswordChangeFinishSchema;
};


export type MutationuserPasswordChangeStartArgs = {
  data: UserPasswordChangeStartSchema;
};


export type MutationuserPasswordResetFinishArgs = {
  data: UserPasswordResetFinishSchema;
};


export type MutationuserPasswordResetStartArgs = {
  data: UserPasswordResetStartSchema;
};


export type MutationuserReceivedMerchantInvitationAcceptArgs = {
  invitationId: Scalars['String']['input'];
};


export type MutationuserReceivedMerchantInvitationRejectArgs = {
  invitationId: Scalars['String']['input'];
};


export type MutationuserSignUpWithEmailFinishArgs = {
  data: UserSignUpWithEmailFinishSchema;
};


export type MutationuserSignUpWithEmailStartArgs = {
  data: UserSignUpWithEmailStartSchema;
};


export type MutationuserSignUpWithEmailVerifyArgs = {
  data: UserSignUpWithEmailVerifySchema;
};


export type MutationuserUpdateDataArgs = {
  data: UserUpdateDataSchema;
};

export enum PAYMENT_METHOD {
  CARD = 'CARD'
}

export enum PAYMENT_METHOD_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export enum PAYMENT_PLAN_STATUS {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  ENDED = 'ENDED',
  ERROR = 'ERROR',
  INACTIVE = 'INACTIVE',
  INITIALIZING = 'INITIALIZING'
}

export enum PAYMENT_PLAN_TEMPLATE_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminErrorLogs: ErrorLogPaginationConnection;
  adminMerchant: Merchant;
  adminMerchantApiKey: MerchantApiKey;
  adminMerchantApiKeys: MerchantApiKeyPaginationConnection;
  adminMerchantTransactionProvider: MerchantTransactionProvider;
  adminMerchantTransactionProviderCredential: Scalars['JSON']['output'];
  adminMerchantTransactionProviders: MerchantTransactionProviderPaginationConnection;
  adminMerchantUser: MerchantUser;
  adminMerchantUsers: MerchantUserPaginationConnection;
  adminMerchants: MerchantPaginationConnection;
  adminUsers: UserPaginationConnection;
  clientPublicTransactionGetPreSessionData: MerchantClientTransactionPreSessionData;
  healthCheck: Scalars['DateTimeISO']['output'];
  healthLivenessCheck: Scalars['DateTimeISO']['output'];
  healthReadinessCheck: Scalars['DateTimeISO']['output'];
  merchantApi: Merchant;
  merchantApiClientGetPreSessionData: MerchantClientTransactionPreSessionData;
  merchantApiCustomerPaymentMethod: MerchantCustomerPaymentMethod;
  merchantApiCustomerPaymentMethods: MerchantCustomerPaymentMethodPaginationConnection;
  merchantApiPaymentPlan: MerchantPaymentPlan;
  merchantApiPaymentPlanTemplate: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplates: MerchantPaymentPlanTemplatePaginationConnection;
  merchantApiPaymentPlans: MerchantPaymentPlanPaginationConnection;
  merchantApiTransaction: MerchantTransaction;
  merchantApiTransactionProvider: MerchantTransactionProvider;
  merchantApiTransactionProviders: MerchantTransactionProviderPaginationConnection;
  merchantApiTransactions: MerchantTransactionPaginationConnection;
  user: User;
  userMerchant: Merchant;
  userMerchantSentInvitation: MerchantUserInvitation;
  userMerchantSentInvitations: MerchantUserInvitationPaginationConnection;
  userMerchants: MerchantPaginationConnection;
  userReceivedMerchantInvitation: MerchantUserInvitation;
  userReceivedMerchantInvitations: MerchantUserInvitationPaginationConnection;
};


export type QueryadminErrorLogsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantArgs = {
  merchantId: Scalars['String']['input'];
};


export type QueryadminMerchantApiKeyArgs = {
  merchantApiKeyId: Scalars['String']['input'];
};


export type QueryadminMerchantApiKeysArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantTransactionProviderArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QueryadminMerchantTransactionProviderCredentialArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QueryadminMerchantTransactionProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantUserArgs = {
  merchantUserId: Scalars['String']['input'];
};


export type QueryadminMerchantUsersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<MERCHANT_USER_ROLE>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminMerchantsArgs = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<ENTITY_TYPE>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publicId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminUsersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryclientPublicTransactionGetPreSessionDataArgs = {
  merchantPublicId: Scalars['String']['input'];
  transactionCode: Scalars['String']['input'];
};


export type QuerymerchantApiClientGetPreSessionDataArgs = {
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type QuerymerchantApiCustomerPaymentMethodArgs = {
  merchantCustomerPaymentMethodId: Scalars['String']['input'];
};


export type QuerymerchantApiCustomerPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  methodType?: InputMaybe<PAYMENT_METHOD>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiPaymentPlanArgs = {
  merchantPaymentPlanId: Scalars['String']['input'];
};


export type QuerymerchantApiPaymentPlanTemplateArgs = {
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
};


export type QuerymerchantApiPaymentPlanTemplatesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_TEMPLATE_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiPaymentPlansArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<CURRENCY>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalPaymentPlanCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PAYMENT_METHOD>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiTransactionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiTransactionProviderArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QuerymerchantApiTransactionProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerymerchantApiTransactionsArgs = {
  action?: InputMaybe<TRANSACTION_ACTION>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  disputed?: InputMaybe<Scalars['Boolean']['input']>;
  failed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodType?: InputMaybe<PAYMENT_METHOD>;
  paymentPlanId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerRelatedCode?: InputMaybe<Scalars['String']['input']>;
  relatedTransactionId?: InputMaybe<Scalars['String']['input']>;
  reverted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<TRANSACTION_STATUS>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantSentInvitationArgs = {
  invitationId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantSentInvitationsArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserMerchantsArgs = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<ENTITY_TYPE>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publicId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserReceivedMerchantInvitationArgs = {
  invitationId: Scalars['String']['input'];
};


export type QueryuserReceivedMerchantInvitationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum SORT_ORDER {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type SortingFieldSchema = {
  field: Scalars['String']['input'];
  order: SORT_ORDER;
};

export enum TRANSACTION_ACTION {
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  CHARGEBACK = 'CHARGEBACK',
  CREDIT = 'CREDIT',
  MODIFICATION = 'MODIFICATION',
  PAYMENT = 'PAYMENT',
  PAYOUT = 'PAYOUT',
  REFUND = 'REFUND',
  SETTLE = 'SETTLE',
  UNKNOWN = 'UNKNOWN',
  VOID = 'VOID'
}

export enum TRANSACTION_PROVIDER {
  NUVEI = 'NUVEI'
}

export enum TRANSACTION_STATUS {
  DECLINED = 'DECLINED',
  ERROR = 'ERROR',
  EXPIRED = 'EXPIRED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  SUCCEEDED = 'SUCCEEDED',
  UNKNOWN = 'UNKNOWN'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerificationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  merchants: Array<MerchantUser>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  phoneVerificationId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserEmailVerifyOrChangeFinishSchema = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserEmailVerifyOrChangeStartSchema = {
  email: Scalars['String']['input'];
};

export type UserPaginationConnection = {
  __typename?: 'UserPaginationConnection';
  edges: Array<UserPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserPaginationEdge = {
  __typename?: 'UserPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: User;
};

export type UserPasswordChangeFinishSchema = {
  updatedPassword: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserPasswordChangeStartSchema = {
  currentPassword?: InputMaybe<Scalars['String']['input']>;
};

export type UserPasswordResetFinishSchema = {
  email: Scalars['String']['input'];
  updatedPassword: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserPasswordResetStartSchema = {
  email: Scalars['String']['input'];
};

export type UserSignUpWithEmailFinishSchema = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserSignUpWithEmailStartSchema = {
  email: Scalars['String']['input'];
};

export type UserSignUpWithEmailVerifySchema = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserUpdateDataSchema = {
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type HealthCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthCheckQuery = { __typename?: 'Query', healthCheck: any };

export type MerchantUserInvitationFragmentFragment = { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } };

export type UserMerchantSentInvitationsQueryVariables = Exact<{
  merchantId: Scalars['String']['input'];
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserMerchantSentInvitationsQuery = { __typename?: 'Query', userMerchantSentInvitations: { __typename?: 'MerchantUserInvitationPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantUserInvitationPaginationEdge', cursor: any, node: { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UserMerchantSentInvitationQueryVariables = Exact<{
  invitationId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserMerchantSentInvitationQuery = { __typename?: 'Query', userMerchantSentInvitation: { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } };

export type UserMerchantSentInvitationCreateMutationVariables = Exact<{
  data: MerchantUserInvitationCreateSchema;
  merchantId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserMerchantSentInvitationCreateMutation = { __typename?: 'Mutation', userMerchantSentInvitationCreate: { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } };

export type UserMerchantSentInvitationCancelMutationVariables = Exact<{
  invitationId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserMerchantSentInvitationCancelMutation = { __typename?: 'Mutation', userMerchantSentInvitationCancel: { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } };

export type UserReceivedMerchantInvitationsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserReceivedMerchantInvitationsQuery = { __typename?: 'Query', userReceivedMerchantInvitations: { __typename?: 'MerchantUserInvitationPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantUserInvitationPaginationEdge', cursor: any, node: { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UserReceivedMerchantInvitationQueryVariables = Exact<{
  invitationId: Scalars['String']['input'];
}>;


export type UserReceivedMerchantInvitationQuery = { __typename?: 'Query', userReceivedMerchantInvitation: { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } };

export type UserReceivedMerchantInvitationAcceptMutationVariables = Exact<{
  invitationId: Scalars['String']['input'];
}>;


export type UserReceivedMerchantInvitationAcceptMutation = { __typename?: 'Mutation', userReceivedMerchantInvitationAccept: { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } };

export type UserReceivedMerchantInvitationRejectMutationVariables = Exact<{
  invitationId: Scalars['String']['input'];
}>;


export type UserReceivedMerchantInvitationRejectMutation = { __typename?: 'Mutation', userReceivedMerchantInvitationReject: { __typename?: 'MerchantUserInvitation', id: string, role: MERCHANT_USER_ROLE, email: string, expiresAt: any, acceptedAt?: any | null, rejectedAt?: any | null, canceledAt?: any | null, createdByMerchantUserId: string, merchantId: string, updatedAt: any, createdAt: any, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } };

export type MerchantFragmentFragment = { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any };

export type MerchantUserFragmentFragment = { __typename?: 'MerchantUser', id: string, isEnabled: boolean, role: MERCHANT_USER_ROLE, createdAt: any, updatedAt: any, merchantId: string, invitationId?: string | null, user: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null }, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } };

export type UserMerchantsQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserMerchantsQuery = { __typename?: 'Query', userMerchants: { __typename?: 'MerchantPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantPaginationEdge', cursor: any, node: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UserMerchantQueryVariables = Exact<{
  merchantId: Scalars['String']['input'];
}>;


export type UserMerchantQuery = { __typename?: 'Query', userMerchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } };

export type UserMerchantCreateMutationVariables = Exact<{
  data: MerchantCreateSchema;
}>;


export type UserMerchantCreateMutation = { __typename?: 'Mutation', userMerchantCreate: { __typename?: 'MerchantUser', id: string, isEnabled: boolean, role: MERCHANT_USER_ROLE, createdAt: any, updatedAt: any, merchantId: string, invitationId?: string | null, user: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null }, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } } };

export type UserMerchantUpdateMutationVariables = Exact<{
  merchantId: Scalars['String']['input'];
  data: MerchantUpdateSchema;
}>;


export type UserMerchantUpdateMutation = { __typename?: 'Mutation', userMerchantUpdate: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } };

export type UserBaseFragmentFragment = { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null };

export type UserFragmentFragment = { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null, merchants: Array<{ __typename?: 'MerchantUser', id: string, isEnabled: boolean, role: MERCHANT_USER_ROLE, createdAt: any, updatedAt: any, merchantId: string, invitationId?: string | null, user: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null }, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null, merchants: Array<{ __typename?: 'MerchantUser', id: string, isEnabled: boolean, role: MERCHANT_USER_ROLE, createdAt: any, updatedAt: any, merchantId: string, invitationId?: string | null, user: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null }, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } }> } };

export type UserSignUpWithEmailStartMutationVariables = Exact<{
  data: UserSignUpWithEmailStartSchema;
}>;


export type UserSignUpWithEmailStartMutation = { __typename?: 'Mutation', userSignUpWithEmailStart: any };

export type UserSignUpWithEmailVerifyMutationVariables = Exact<{
  data: UserSignUpWithEmailVerifySchema;
}>;


export type UserSignUpWithEmailVerifyMutation = { __typename?: 'Mutation', userSignUpWithEmailVerify: any };

export type UserSignUpWithEmailFinishMutationVariables = Exact<{
  data: UserSignUpWithEmailFinishSchema;
}>;


export type UserSignUpWithEmailFinishMutation = { __typename?: 'Mutation', userSignUpWithEmailFinish: string };

export type UserUpdateDataMutationVariables = Exact<{
  data: UserUpdateDataSchema;
}>;


export type UserUpdateDataMutation = { __typename?: 'Mutation', userUpdateData: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null, merchants: Array<{ __typename?: 'MerchantUser', id: string, isEnabled: boolean, role: MERCHANT_USER_ROLE, createdAt: any, updatedAt: any, merchantId: string, invitationId?: string | null, user: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null }, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } }> } };

export type UserSessionsCloseMutationVariables = Exact<{ [key: string]: never; }>;


export type UserSessionsCloseMutation = { __typename?: 'Mutation', userSessionsClose: any };

export type UserPasswordChangeStartMutationVariables = Exact<{
  data: UserPasswordChangeStartSchema;
}>;


export type UserPasswordChangeStartMutation = { __typename?: 'Mutation', userPasswordChangeStart: any };

export type UserPasswordChangeFinishMutationVariables = Exact<{
  data: UserPasswordChangeFinishSchema;
}>;


export type UserPasswordChangeFinishMutation = { __typename?: 'Mutation', userPasswordChangeFinish: string };

export type UserEmailVerifyOrChangeStartMutationVariables = Exact<{
  data: UserEmailVerifyOrChangeStartSchema;
}>;


export type UserEmailVerifyOrChangeStartMutation = { __typename?: 'Mutation', userEmailVerifyOrChangeStart: any };

export type UserEmailVerifyOrChangeFinishMutationVariables = Exact<{
  data: UserEmailVerifyOrChangeFinishSchema;
}>;


export type UserEmailVerifyOrChangeFinishMutation = { __typename?: 'Mutation', userEmailVerifyOrChangeFinish: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null, merchants: Array<{ __typename?: 'MerchantUser', id: string, isEnabled: boolean, role: MERCHANT_USER_ROLE, createdAt: any, updatedAt: any, merchantId: string, invitationId?: string | null, user: { __typename?: 'User', id: string, name: string, email: string, phone?: string | null, createdAt: any, updatedAt: any, isAdmin: boolean, emailVerificationId?: string | null, phoneVerificationId?: string | null }, merchant: { __typename?: 'Merchant', id: string, publicId?: string | null, publicIdUpdatedAt?: any | null, name: string, industry?: string | null, websiteUrl?: string | null, entityType: ENTITY_TYPE, email: string, phone?: string | null, status: MERCHANT_STATUS, addressCountry?: COUNTRY_ISO_2 | null, addressState?: string | null, addressCity?: string | null, addressLine1?: string | null, addressLine2?: string | null, addressPostalCode?: string | null, legalAddressCountry?: COUNTRY_ISO_2 | null, legalAddressState?: string | null, legalAddressCity?: string | null, legalAddressLine1?: string | null, legalAddressLine2?: string | null, legalAddressPostalCode?: string | null, primaryContactName?: string | null, primaryContactEmail?: string | null, primaryContactPhone?: string | null, timezone?: string | null, locale?: string | null, archivedAt?: any | null, createdAt: any, updatedAt: any } }> } };

export type UserHandleLoginAttemptMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type UserHandleLoginAttemptMutation = { __typename?: 'Mutation', userHandleLoginAttempt: any };

export type UserPasswordResetStartMutationVariables = Exact<{
  data: UserPasswordResetStartSchema;
}>;


export type UserPasswordResetStartMutation = { __typename?: 'Mutation', userPasswordResetStart: string };

export type UserPasswordResetFinishMutationVariables = Exact<{
  data: UserPasswordResetFinishSchema;
}>;


export type UserPasswordResetFinishMutation = { __typename?: 'Mutation', userPasswordResetFinish: string };

export const MerchantFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantFragmentFragment, unknown>;
export const MerchantUserInvitationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantUserInvitationFragmentFragment, unknown>;
export const UserBaseFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerificationId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerificationId"}}]}}]} as unknown as DocumentNode<UserBaseFragmentFragment, unknown>;
export const MerchantUserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerificationId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerificationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantUserFragmentFragment, unknown>;
export const UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"merchants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerificationId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerificationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitationId"}}]}}]} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const HealthCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HealthCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"healthCheck"}}]}}]} as unknown as DocumentNode<HealthCheckQuery, HealthCheckQueryVariables>;
export const UserMerchantSentInvitationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserMerchantSentInvitations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accepted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expired"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rejected"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMerchantSentInvitations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}},{"kind":"Argument","name":{"kind":"Name","value":"accepted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accepted"}}},{"kind":"Argument","name":{"kind":"Name","value":"canceled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}}},{"kind":"Argument","name":{"kind":"Name","value":"expired"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expired"}}},{"kind":"Argument","name":{"kind":"Name","value":"rejected"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rejected"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserInvitationFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserMerchantSentInvitationsQuery, UserMerchantSentInvitationsQueryVariables>;
export const UserMerchantSentInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserMerchantSentInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMerchantSentInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"invitationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserInvitationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserMerchantSentInvitationQuery, UserMerchantSentInvitationQueryVariables>;
export const UserMerchantSentInvitationCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserMerchantSentInvitationCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitationCreateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMerchantSentInvitationCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserInvitationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserMerchantSentInvitationCreateMutation, UserMerchantSentInvitationCreateMutationVariables>;
export const UserMerchantSentInvitationCancelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserMerchantSentInvitationCancel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMerchantSentInvitationCancel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"invitationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserInvitationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserMerchantSentInvitationCancelMutation, UserMerchantSentInvitationCancelMutationVariables>;
export const UserReceivedMerchantInvitationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserReceivedMerchantInvitations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userReceivedMerchantInvitations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserInvitationFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserReceivedMerchantInvitationsQuery, UserReceivedMerchantInvitationsQueryVariables>;
export const UserReceivedMerchantInvitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserReceivedMerchantInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userReceivedMerchantInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"invitationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserInvitationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserReceivedMerchantInvitationQuery, UserReceivedMerchantInvitationQueryVariables>;
export const UserReceivedMerchantInvitationAcceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserReceivedMerchantInvitationAccept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userReceivedMerchantInvitationAccept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"invitationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserInvitationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserReceivedMerchantInvitationAcceptMutation, UserReceivedMerchantInvitationAcceptMutationVariables>;
export const UserReceivedMerchantInvitationRejectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserReceivedMerchantInvitationReject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userReceivedMerchantInvitationReject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"invitationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invitationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserInvitationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserInvitationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUserInvitation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rejectedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByMerchantUserId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<UserReceivedMerchantInvitationRejectMutation, UserReceivedMerchantInvitationRejectMutationVariables>;
export const UserMerchantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserMerchants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMerchants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserMerchantsQuery, UserMerchantsQueryVariables>;
export const UserMerchantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserMerchant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMerchant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserMerchantQuery, UserMerchantQueryVariables>;
export const UserMerchantCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserMerchantCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCreateSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMerchantCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerificationId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerificationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitationId"}}]}}]} as unknown as DocumentNode<UserMerchantCreateMutation, UserMerchantCreateMutationVariables>;
export const UserMerchantUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserMerchantUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUpdateSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMerchantUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserMerchantUpdateMutation, UserMerchantUpdateMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerificationId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerificationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"merchants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserFragment"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UserSignUpWithEmailStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailStartMutation, UserSignUpWithEmailStartMutationVariables>;
export const UserSignUpWithEmailVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailVerifySchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailVerifyMutation, UserSignUpWithEmailVerifyMutationVariables>;
export const UserSignUpWithEmailFinishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailFinish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailFinishMutation, UserSignUpWithEmailFinishMutationVariables>;
export const UserUpdateDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdateData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateDataSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdateData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerificationId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerificationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"merchants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserFragment"}}]}}]}}]} as unknown as DocumentNode<UserUpdateDataMutation, UserUpdateDataMutationVariables>;
export const UserSessionsCloseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSessionsClose"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSessionsClose"}}]}}]} as unknown as DocumentNode<UserSessionsCloseMutation, UserSessionsCloseMutationVariables>;
export const UserPasswordChangeStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPasswordChangeStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordChangeStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPasswordChangeStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserPasswordChangeStartMutation, UserPasswordChangeStartMutationVariables>;
export const UserPasswordChangeFinishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPasswordChangeFinish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordChangeFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPasswordChangeFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserPasswordChangeFinishMutation, UserPasswordChangeFinishMutationVariables>;
export const UserEmailVerifyOrChangeStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserEmailVerifyOrChangeStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailVerifyOrChangeStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userEmailVerifyOrChangeStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserEmailVerifyOrChangeStartMutation, UserEmailVerifyOrChangeStartMutationVariables>;
export const UserEmailVerifyOrChangeFinishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserEmailVerifyOrChangeFinish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailVerifyOrChangeFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userEmailVerifyOrChangeFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerificationId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerificationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"websiteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"entityType"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"addressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"addressState"}},{"kind":"Field","name":{"kind":"Name","value":"addressCity"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"primaryContactPhone"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantUserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invitationId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"merchants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantUserFragment"}}]}}]}}]} as unknown as DocumentNode<UserEmailVerifyOrChangeFinishMutation, UserEmailVerifyOrChangeFinishMutationVariables>;
export const UserHandleLoginAttemptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserHandleLoginAttempt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userHandleLoginAttempt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<UserHandleLoginAttemptMutation, UserHandleLoginAttemptMutationVariables>;
export const UserPasswordResetStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPasswordResetStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordResetStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPasswordResetStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserPasswordResetStartMutation, UserPasswordResetStartMutationVariables>;
export const UserPasswordResetFinishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPasswordResetFinish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordResetFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPasswordResetFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserPasswordResetFinishMutation, UserPasswordResetFinishMutationVariables>;