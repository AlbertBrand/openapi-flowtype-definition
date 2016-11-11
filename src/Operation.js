// @flow
import type { ExternalDocumentation } from './ExternalDocumentation';
import type { Parameter } from './ParametersDefinition';
import type { Reference } from './Reference';
import type { Responses } from './ResponsesDefinition';
import type { ProtocolScheme } from './ProtocolScheme';
import type { SecurityRequirement } from './SecurityRequirement';

export type Operation = {|
  tags?: string[],
  summary?: string,
  description?: string,
  externalDocs?: ExternalDocumentation,
  operationId?: string,
  consumes?: string[],
  produces?: string[],
  parameters?: Array<Parameter | Reference>,
  responses: Responses,
  schemes?: ProtocolScheme[],
  deprecated?: boolean,
  security?: SecurityRequirement[],
|};
