import React, { useState } from 'react';
import styled from 'styled-components';
import Textarea from '../../atoms/Textarea';
import MarkdownPreview from '../../molecules/MarkdownPreview';
import Section from '../../molecules/Section';

const StyledTextarea = styled(Textarea)`
  width: 100%;
  height: 360px;

  overflow-y: scroll;
  resize: none;
`;

const StyledMarkdownPreview = styled(MarkdownPreview)`
  height: 360px;
  overflow-y: scroll;
`;

const TechnologyMarkdownEditor: React.VFC = () => {
  const [markdown, setMarkdown] = useState(
    '# 見出し1\n## 見出し2\n### 見出し3\n\n- リスト1\n- リスト2\n- リスト3\n\n> 引用1\n> 引用2',
  );

  return (
    <Section
      enHeading="Markdown Editor"
      jpHeading="マークダウンエディタ"
      id="mdeditor"
    >
      <StyledTextarea value={markdown} onChange={setMarkdown} />
      <StyledMarkdownPreview markdown={markdown} />
    </Section>
  );
};

export default TechnologyMarkdownEditor;
