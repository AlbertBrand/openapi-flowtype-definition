// @flow
export type License = {|
  name: string,
  url?: string,
|};

export type Contact = {|
  name?: string,
  url?: string,
  email?: string,
|};

export type Info = {|
  title: string,
  description?: string,
  termsOfService?: string,
  contact?: Contact,
  license?: License,
  version: string,
|};
