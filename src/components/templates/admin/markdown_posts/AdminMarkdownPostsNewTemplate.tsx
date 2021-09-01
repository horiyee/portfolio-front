import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { createMarkdownPostApiClient } from '../../../../api/clients/markdownPosts';
import { paths } from '../../../../config/paths';
import { colors } from '../../../../styles/variables';
import { CreateMarkdownPostApiRequest } from '../../../../types/api/markdownPosts';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import Input from '../../../atoms/Input';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import MarkdownEditor from '../../../organisms/MarkdownEditor';
import AdminTemplate from '../../common/AdminTemplate';

const Form = styled.form`
  width: 100%;
`;

const ItemWrapper = styled.div`
  padding: 8px 0;
  margin: 8px 0;
`;

const Label = styled.label`
  line-height: 2;
`;

const TitleInput = styled(Input)`
  width: 100%;
`;

const CancelButton = styled(BasicButton)`
  color: ${colors.error};
  fill: ${colors.error};
`;

const PostButton = styled(BasicButton)``;

const AdminMarkdownPostsNewTemplate: React.VFC = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onClickPost = async (markdownPost: CreateMarkdownPostApiRequest) => {
    const confirm = window.confirm(`記事『${title}』を投稿しますか？`);
    if (confirm) {
      try {
        const res = await createMarkdownPostApiClient(markdownPost);
        alert('投稿が完了しました。');
        router.push(`${paths.admin.markdownPosts.index}/${res}/edit`);
      } catch {
        alert('投稿に失敗しました。');
      }
    }
  };

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規マークダウン記事</AdminPageTitle>

      <Form>
        <ItemWrapper>
          <Label>
            タイトル
            <TitleInput value={title} onChange={setTitle} />
          </Label>
        </ItemWrapper>
        <ItemWrapper>
          <Label>
            本文（マークダウン形式）
            <MarkdownEditor markdown={body} setMarkdown={setBody} />
          </Label>
        </ItemWrapper>
      </Form>

      <AdminBottomActionBar>
        <CancelButton
          onClick={() => router.push(paths.admin.markdownPosts.index)}
          icon={<ClearIcon />}
        >
          やめる
        </CancelButton>
        <PostButton
          onClick={() => onClickPost({ title: title, body: body })}
          icon={<SendIcon />}
        >
          記事を投稿
        </PostButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostsNewTemplate;
