import React from 'react';
import Link from 'next/link';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';

type Props = {
  children?: React.ReactNode;
  href: string;
  className?: string;
  openInNewTab?: boolean;
};

const NextLink: React.VFC<Props> = ({
  children,
  href,
  className,
  openInNewTab,
}) => {
  const isExternalLink = href.includes('http');

  const target = openInNewTab || isExternalLink ? '_blank' : undefined;
  const rel =
    openInNewTab || isExternalLink ? 'noopener noreferrer' : undefined;

  return (
    <Link href={href}>
      <a href={href} target={target} rel={rel} className={classes(className)}>
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
