// @flow
export type ItemsNotArrayType = 'string' | 'number' | 'integer' | 'boolean';
export type ItemsCollectionFormat = 'csv' | 'ssv' | 'tsv' | 'pipes';

export type ItemsArray = {|
  type: 'array',
  format?: string,
  items: Items,
  collectionFormat?: ItemsCollectionFormat,
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

export type ItemsNotArray = {|
  type: ItemsNotArrayType,
  format?: string,
  items?: Items,
  collectionFormat?: ItemsCollectionFormat,
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

export type Items = ItemsArray | ItemsNotArray;
