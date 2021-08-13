import { breakPoints } from './variables';

export const fontSize = (px: number) => {
  const rem = px / 10;

  return `
    font-size: ${px}px;
    font-size: ${rem}rem;
  `;
};

export const hover = (styles: string) => {
  return `
    &:hover {
      ${styles}
    }
  `;
};

export const hoverWithTransition = (styles: string) => {
  return `
    transition: 0.4s all;
    &:hover {
      ${styles}
    }
  `;
};

export const mqSp = (styles: string) => {
  return `
    @media only screen and (max-width: ${breakPoints.sp - 1}px) {
      ${styles}
    }
  `;
};

export const mqTablet = (styles: string) => {
  return `
    @media only screen and (min-width: ${breakPoints.sp}px) and (max-width: ${
    breakPoints.pc - 1
  }px) {
      ${styles}
    }
  `;
};

export const mqPc = (styles: string) => {
  return `
    @media only screen and (min-width: ${breakPoints.pc}px) {
      ${styles}
    }
  `;
};
