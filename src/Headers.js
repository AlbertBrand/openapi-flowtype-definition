// @flow
import type { Items } from './Items';

export type HeaderNotArrayType = 'string' | 'number' | 'integer' | 'boolean';
export type HeaderCollectionFormat = 'csv' | 'ssv' | 'tsv' | 'pipes';

export type HeaderArray = {|
  description?: string,
  type: 'array',
  format?: string,
  items: Items,
  collectionFormat?: HeaderCollectionFormat,
  default?: string,
  maximum?: number,
  exclusiveMaximum?: boolean,
  minimum?: number,
  exclusiveMinimum?: boolean,
  maxLength?: number,
  minLength?: number,
  pattern?: string,
  maxItems?: number,
  minItems?: number,
  uniqueItems?: boolean,
  enum?: mixed[],
  multipleOf?: number,
|};

export type HeaderNotArray = {|
  description?: string,
  type: HeaderNotArrayType,
  format?: string,
  items?: Items,
  collectionFormat?: HeaderCollectionFormat,
  default?: string,
  maximum?: number,
  exclusiveMaximum?: boolean,
  minimum?: number,
  exclusiveMinimum?: boolean,
  maxLength?: number,
  minLength?: number,
  pattern?: string,
  maxItems?: number,
  minItems?: number,
  uniqueItems?: boolean,
  enum?: mixed[],
  multipleOf?: number,
|};

export type Header = HeaderArray | HeaderNotArray;

export type Headers = {
  [key: string]: Header,
};
