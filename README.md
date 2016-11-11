# OpenAPI 2.0 Flowtype definition

This repo contains [Flowtype](https://flowtype.org/) annotations for the
[OpenAPI 2.0](http://swagger.io/specification/) (or Swagger 2.0) JSON format. It
uses
[exact object types](https://flowtype.org/docs/objects.html#exact-object-types)
for each specified OpenAPI object and doesn't allow vendor extensions.

## Install

```
npm i --save-dev openapi-flowtype-definition
```

or

```
yarn add --dev openapi-flowtype-definition
```

## How to use

Assuming that your project is set up with Flowtype, import the type whenever you
need to type check a JS object containing the OpenAPI definition:

```
import type { OpenAPI } from 'openapi-flowtype-definition';

const api: OpenAPI = {
  swagger: "2.0",
  // etc...
}
```

See the example under `./example` for more examples.
