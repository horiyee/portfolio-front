import React from 'react';
import { classes } from '../../../utils/classes';

type Props = {
  className?: string;
};

const ArrowRightAltIcon: React.VFC<Props> = ({ className }) => {
  return (
    <svg
      className={classes(className)}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
    </svg>
  );
};

export default ArrowRightAltIcon;
