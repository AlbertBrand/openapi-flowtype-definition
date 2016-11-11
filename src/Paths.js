// @flow
import type { Operation } from './Operation';
import type { Parameter } from './ParametersDefinition';
import type { Reference } from './Reference';

export type PathItem = {|
  $ref?: string,
  get?: Operation,
  put?: Operation,
  post?: Operation,
  delete?: Operation,
  options?: Operation,
  head?: Operation,
  patch?: Operation,
  parameters?: Array<Parameter | Reference>,
|};

export type Paths = {
  [key: string]: PathItem,
};
