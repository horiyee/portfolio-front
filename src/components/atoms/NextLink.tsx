import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  href: string;
  className?: string;
};

const Root = styled(Link)``;

const Anchor = styled.a``;

const NextLink: React.VFC<Props> = ({ children, href, className }) => {
  return (
    <Root href={href}>
      <Anchor href={href} className={className}>
        {children}
      </Anchor>
    </Root>
  );
};

export default NextLink;
