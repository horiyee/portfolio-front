export type Matrix = {
  x: number;
  y: number;
};

export type KeyValueData = {
  key: any;
  value: any;
};

export type AlbumImage = {
  src: StaticImageData;
  alt: string;
  link?: string;
};

export class QueryParameterNaNError extends Error {}

export class QueryParameterDuplicateError extends Error {}
