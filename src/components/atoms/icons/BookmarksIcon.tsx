import React from 'react';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';

type Props = {
  className?: string;
};

const BookmarksIcon: React.VFC<Props> = ({ className }) => {
  return (
    <svg
      className={classes(className)}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"></path>
    </svg>
  );
};

export default BookmarksIcon;
