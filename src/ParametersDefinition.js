// @flow
import type { Schema } from './Schema';
import type { Items } from './Items';

export type ParameterType = 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'file';
export type ParameterCollectionFormat = 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi';
export type ParameterNotInBodyIn = 'query' | 'header' | 'path' | 'formData';

export type ParameterInBody = {|
  name: string,
  in: 'body',
  description?: string,
  required?: boolean,
  schema: Schema,
|};

export type ParameterNotInBody = {|
  name: string,
  in: ParameterNotInBodyIn,
  description?: string,
  required?: boolean,
  type?: ParameterType,
  format?: string,
  allowEmptyValue?: boolean,
  items?: Items,
  collectionFormat?: ParameterCollectionFormat,
  default?: mixed,
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

export type Parameter = ParameterInBody | ParameterNotInBody;

export type ParametersDefinition = {
  [key: string]: Parameter,
};
