// @flow
import type { Schema } from './Schema';
import type { Headers } from './Headers';
import type { Example } from './Example';
import type { Reference } from './Reference';

export type Response = {|
  description: string,
  schema?: Schema,
  headers?: Headers,
  examples?: Example,
|};

export type Responses = {
  [key: string]: Response | Reference,
};

export type ResponsesDefinition = {
  [key: string]: Response,
};
