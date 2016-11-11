// @flow
import type { XML } from './XML';
import type { ExternalDocumentation } from './ExternalDocumentation';

export type SchemaProperties = {
  [key: string]: Schema,
};

export type Schema = {|
  $ref?: string,
  format?: string,
  title?: string,
  description?: string,
  default?: boolean,
  multipleOf?: number,
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
  maxProperties?: number,
  minProperties?: number,
  required?: string[],
  enum?: mixed[],
  type?: string,
  items?: Schema,
  allOf?: Schema[],
  properties?: SchemaProperties,
  additionalProperties?: Schema,
  discriminator?: string,
  readOnly?: boolean,
  xml?: XML,
  externalDocs?: ExternalDocumentation,
  example?: mixed,
|};
