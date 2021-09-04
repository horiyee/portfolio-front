import React from 'react';
import styled from 'styled-components';
import { underlinedBlueLinkStyle } from '../../styles/variables';
import { classes } from '../../utils/classes';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Root = styled.div`
  display: inline-block;
  width: 100%;

  /* TODO: try global style */
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 32px 0 16px 0;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 16px 0 8px 0;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 16px 0 4px 0;
  }

  p {
    font-weight: 400;
    line-height: 1.8;
    padding: 16px 0;
  }

  a {
    ${underlinedBlueLinkStyle};
  }

  img {
    width: 100%;
    margin: 16px 0;
  }

  pre {
    /* padding: 16px; */
    margin: 16px 0;
    /* background: #2c2a2a; */
    line-height: 1.8;
    color: #fff;
  }

  code {
    font-size: inherit;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  blockquote {
    background: rgb(221, 221, 221);
    padding: 16px;
    margin: 16px 0;
  }

  ul {
    padding: 16px 0 16px 40px;
  }

  li {
    line-height: 1.8;
  }
`;

const StyledInnerHTML: React.VFC<Props> = ({ children, className }) => {
  return <Root className={classes(className)}>{children}</Root>;
};

export default StyledInnerHTML;
