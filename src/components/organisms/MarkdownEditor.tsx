import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import Textarea from '../atoms/Textarea';
import MarkdownPreview from '../molecules/MarkdownPreview';

type Props = {
  markdown: string;
  setMarkdown: (value: string) => void;
};

const Root = styled.div`
  display: flex;
  width: 100%;
`;

const Editor = styled(Textarea)`
  width: 50%;
  height: 420px;
  overflow-y: scroll;
  resize: none;

  /* min-height: 420px; */
  /* resize: vertical; */
`;

const Preview = styled(MarkdownPreview)`
  width: 50%;
  height: 420px;
  overflow-y: scroll;
`;

const MarkdownEditor: React.VFC<Props> = ({ markdown, setMarkdown }) => {
  return (
    <Root>
      <Editor value={markdown} onChange={setMarkdown} />
      <Preview markdown={markdown} />
    </Root>
  );
};

export default MarkdownEditor;
