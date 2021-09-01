import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { createMarkdownPostApiClient } from '../../../../api/clients/markdownPosts';
import { paths } from '../../../../config/paths';
import { colors } from '../../../../styles/variables';
import { CreateMarkdownPostApiRequest } from '../../../../types/api/markdownPosts';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

const CancelButton = styled(BasicButton)`
  color: ${colors.error};
  fill: ${colors.error};
`;

const PostButton = styled(BasicButton)``;

const AdminMarkdownPostsNewTemplate: React.VFC = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onClickPost = useCallback(
    async (markdownPost: CreateMarkdownPostApiRequest) => {
      const confirm = window.confirm(`記事を投稿しますか？`);
      if (confirm) {
        try {
          const res = await createMarkdownPostApiClient(markdownPost);
          alert('投稿が完了しました。');
          router.push(`${paths.admin.markdownPosts.index}`);
        } catch {
          alert('投稿に失敗しました。');
        }
      }
    },
    [],
  );

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規マークダウン記事</AdminPageTitle>

      <AdminMarkdownPostEditor
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
      />

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
