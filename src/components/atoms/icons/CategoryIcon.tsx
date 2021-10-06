import React from 'react';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';

type Props = {
  className?: string;
};

const CategoryIcon: React.VFC<Props> = ({ className }) => {
  return (
    <svg
      className={classes(className)}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2l-5.5 9h11z"></path>
      <circle cx="17.5" cy="17.5" r="4.5"></circle>
      <path d="M3 13.5h8v8H3z"></path>
    </svg>
  );
};

export default CategoryIcon;
