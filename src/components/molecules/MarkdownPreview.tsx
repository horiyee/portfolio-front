import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import InnerHTMLStyler from '../atoms/InnerHTMLStyler';

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
`;

const StyledInnerHTMLStyler = styled(InnerHTMLStyler)`
  pre {
    padding: 16px;
  }
`;

const MarkdownPreview: React.VFC<Props> = ({ markdown, className }) => {
  return (
    <Root className={classes(className)}>
      <StyledInnerHTMLStyler>
        <StyledReactMarkdown>{markdown}</StyledReactMarkdown>
      </StyledInnerHTMLStyler>
    </Root>
  );
};

export default MarkdownPreview;
