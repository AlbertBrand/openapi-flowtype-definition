// @flow
/* eslint-disable no-unused-vars */
import type { OpenAPI } from 'openapi-flowtype-definition';

let api: OpenAPI;

// minimal correct definition
api = {
  swagger: '2.0',
  info: {
    title: '',
    version: '1'
  },
  paths: {},
}

// no required fields present, see what happens if you remove error suppress
// $FlowFixMe
api = {
}

// other fields present, see what happens if you remove error suppress
// $FlowFixMe
api = {
  swagger: '2.0',
  info: {
    title: '',
    version: '1'
  },
  paths: {},
  unknownProperty: 'isAnError'
}
