import React from 'react';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';

type Props = {
  className?: string;
};

const ArrowBackIcon: React.VFC<Props> = ({ className }) => {
  return (
    <svg
      className={classes(className)}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
    </svg>
  );
};

export default ArrowBackIcon;
