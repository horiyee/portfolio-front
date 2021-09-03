export type Matrix = {
  x: number;
  y: number;
};

export type KeyValueData = {
  key: any;
  value: any;
};

export class QueryParameterNaNError extends Error {}

export class QueryParameterDuplicateError extends Error {}
