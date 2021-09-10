import React from 'react';
import styled from 'styled-components';
import { AdminForm, AdminFormItemWrapper } from '../../../styles/components';
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
    <AdminForm>
      <AdminFormItemWrapper>
        <AdminLabeledInput label="タイトル" value={title} setValue={setTitle} />
      </AdminFormItemWrapper>
      <AdminFormItemWrapper>
        <Label>
          本文（マークダウン形式）
          <MarkdownEditor markdown={body} setMarkdown={setBody} />
        </Label>
      </AdminFormItemWrapper>
    </AdminForm>
  );
};

export default AdminMarkdownPostEditor;
