import React from 'react';
import styled from 'styled-components';
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
  min-height: 420px;
`;

const Preview = styled(MarkdownPreview)`
  width: 50%;
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
