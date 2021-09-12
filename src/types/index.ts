import { snackbarColors } from '../styles/variables';

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

export type WebShareData = {
  url: string;
  text: string;
  title: string;
};

export type SelectorOption = {
  value: string;
  label: string;
};

export type SnackbarPositions = 'top' | 'bottom';
export type SnackbarColors = typeof snackbarColors[keyof typeof snackbarColors];
export type SnackbarOption = {
  content: string;
  color: SnackbarColors;
  position: SnackbarPositions;
};

export class QueryParameterNaNError extends Error {}

export class QueryParameterDuplicateError extends Error {}
