import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { classes } from '../../utils/classes';
import StyledInnerHTML from '../atoms/StyledInnerHTML';

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

const MarkdownPreview: React.VFC<Props> = ({ markdown, className }) => {
  return (
    <Root className={classes(className)}>
      <StyledInnerHTML>
        <StyledReactMarkdown>{markdown}</StyledReactMarkdown>
      </StyledInnerHTML>
    </Root>
  );
};

export default MarkdownPreview;
