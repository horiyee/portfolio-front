export const fontFamilies = {
  jpFont: `"Noto Sans JP", sans-serif`,
  enFont: `"Poppins", sans-serif`,
} as const;

export const colors = {
  white: `#fff`,
  defaultBlack: `#121212`,
  description: `#3e3e3e`,
  borderBlack: `rgba(0, 0, 0, 0.5)`,
  borderGray: `#f1f1f1`,
  buttonGray: `#606060`,
  disabled: `#12121236`,
  defaultBlue: `#1e65df`,
  darkBlue: `#1757c4`,
  lightBlue: `#70c8f7`,
  defaultGreen: `#159e7c`,
  success: `rgb(60, 157, 112)`,
  error: `rgb(228, 83, 83)`,
  twitter: `#1d9bf0`,
} as const;

export const snackbarColors = {
  success: `rgb(60, 157, 112)`,
  error: `rgb(228, 83, 83)`,
} as const;

export const breakPoints = {
  pc: 1024,
  sp: 420,
} as const;

export const zIndexes = {
  mobileMenu: 10000,
  header: 9999,
  snackbar: 9998,
} as const;

// TODO: try apply hover()
export const underlinedBlueLinkStyle = `
  color: ${colors.defaultBlue};
  text-decoration: underline;
`;
