// @flow
import type { Scopes } from './Scopes';

export type SecuritySchemeIn = 'query' | 'header';
export type SecuritySchemeFlow = 'implicit' | 'password' | 'application' | 'accessCode';

export type SecuritySchemeBasic = {|
  type: 'basic',
  description?: string,
|};

export type SecuritySchemeApiKey = {|
  type: 'apiKey',
  description?: string,
  name: string,
  in: SecuritySchemeIn,
|};

// No required checks on authorizationUrl or tokenUrl to keep things simple
export type SecuritySchemeOAuth2 = {|
  type: 'oauth2',
  description?: string,
  flow: SecuritySchemeFlow,
  authorizationUrl?: string,
  tokenUrl?: string,
  scopes: Scopes,
|};

export type SecurityScheme = SecuritySchemeBasic | SecuritySchemeApiKey | SecuritySchemeOAuth2;

export type SecurityDefinitions = {
  [key: string]: SecurityScheme,
};
