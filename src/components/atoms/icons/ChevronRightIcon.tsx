import React from 'react';
import { classes } from '../../../utils/classes';

type Props = {
  className?: string;
};

const ChevronRightIcon: React.VFC<Props> = ({ className }) => {
  return (
    <svg
      className={classes(className)}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
    </svg>
  );
};

export default ChevronRightIcon;
