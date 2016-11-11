// @flow
import type { Info } from './Info';
import type { Tag } from './Tag';
import type { ProtocolScheme } from './ProtocolScheme';
import type { Paths } from './Paths';
import type { Definitions } from './Definitions';
import type { ParametersDefinition } from './ParametersDefinition';
import type { ResponsesDefinition } from './ResponsesDefinition';
import type { SecurityDefinitions } from './SecurityDefinitions';
import type { SecurityRequirement } from './SecurityRequirement';
import type { ExternalDocumentation } from './ExternalDocumentation';

export type Swagger = {|
  swagger: '2.0',
  info: Info,
  host?: string,
  basePath?: string,
  schemes?: ProtocolScheme[],
  consumes?: string[],
  produces?: string[],
  paths: Paths,
  definitions?: Definitions,
  parameters?: ParametersDefinition,
  responses?: ResponsesDefinition,
  securityDefinitions?: SecurityDefinitions,
  security?: SecurityRequirement[],
  tags?: Tag[],
  externalDocs?: ExternalDocumentation,
|};
