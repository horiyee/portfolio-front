import React from 'react';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';

type Props = {
  className?: string;
};

const ArrowForwardIcon: React.VFC<Props> = ({ className }) => {
  return (
    <svg
      className={classes(className)}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
    </svg>
  );
};

export default ArrowForwardIcon;
