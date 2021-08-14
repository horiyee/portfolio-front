import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { classes } from '../../utils/classes';

type Props = {
  markdown: string;
  className?: string;
};

const Root = styled.article`
  display: inline-block;
  width: 100%;
  padding: 0 16px;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  table-layout: fixed;
  * {
    overflow-wrap: break-word;
  }
  h1 {
    margin: 32px 0 16px 0;
  }
  h2 {
    margin: 16px 0 8px 0;
  }
  h3 {
    margin: 16px 0 4px 0;
  }
  h4 {
    margin: 12px 0 4px 0;
  }
  p {
    line-height: 1.8;
    padding: 16px 0;
  }
  pre {
    padding: 16px;
    margin: 16px 0;
    background: #2c2a2a;
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

const MarkdownPreview: React.VFC<Props> = ({ markdown, className }) => {
  return (
    <Root className={classes(className)}>
      <StyledReactMarkdown>{markdown}</StyledReactMarkdown>
    </Root>
  );
};

export default MarkdownPreview;
