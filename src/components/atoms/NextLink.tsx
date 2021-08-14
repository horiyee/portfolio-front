import React from 'react';
import Link from 'next/link';
import { classes } from '../../utils/classes';

type Props = {
  children?: React.ReactNode;
  href: string;
  className?: string;
};

const NextLink: React.VFC<Props> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a href={href} className={classes(className)}>
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
