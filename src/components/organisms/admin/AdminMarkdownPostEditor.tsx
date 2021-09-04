import React from 'react';
import styled from 'styled-components';
import AdminLabeledInput from '../../molecules/admin/AdminLabeledInput';
import MarkdownEditor from '../MarkdownEditor';

type Props = {
  title: string;
  body: string;
  setTitle: (value: string) => void;
  setBody: (value: string) => void;
};

const Root = styled.form`
  width: 100%;
`;

const ItemWrapper = styled.div`
  padding: 8px 0;
  margin: 8px 0;
`;

const Label = styled.label`
  line-height: 2;
`;

const AdminMarkdownPostEditor: React.VFC<Props> = ({
  title,
  body,
  setTitle,
  setBody,
}) => {
  return (
    <Root>
      <ItemWrapper>
        <AdminLabeledInput label="タイトル" value={title} setValue={setTitle} />
      </ItemWrapper>
      <ItemWrapper>
        <Label>
          本文（マークダウン形式）
          <MarkdownEditor markdown={body} setMarkdown={setBody} />
        </Label>
      </ItemWrapper>
    </Root>
  );
};

export default AdminMarkdownPostEditor;
