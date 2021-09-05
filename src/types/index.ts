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

export type MetaData = {
  pageTitle: string;
  commonTitle?: string;
  description?: string;
  pagePath: string;
  ogpImageUrl?: string;
  noIndex?: boolean;
};

export class QueryParameterNaNError extends Error {}

export class QueryParameterDuplicateError extends Error {}
