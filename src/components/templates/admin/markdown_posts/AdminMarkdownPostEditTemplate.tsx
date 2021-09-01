import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  deleteMarkdownPostApiClient,
  updateMarkdownPostApiClient,
} from '../../../../api/clients/markdownPosts';
import { paths } from '../../../../config/paths';
import { colors } from '../../../../styles/variables';
import { CreateMarkdownPostApiRequest } from '../../../../types/api/markdownPosts';
import { MarkdownPost } from '../../../../types/markdownPost';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import DeleteIcon from '../../../atoms/icons/DeleteIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  markdownPost: MarkdownPost | null;
};

const CancelButton = styled(BasicButton)`
  color: ${colors.error};
  fill: ${colors.error};
`;

const DeleteButton = styled(BasicButton)`
  color: ${colors.error};
  fill: ${colors.error};
`;

const UpdateButton = styled(BasicButton)``;

const AdminMarkdownPostEditTemplate: React.VFC<Props> = ({ markdownPost }) => {
  const router = useRouter();

  const [title, setTitle] = useState(markdownPost ? markdownPost.title : '');
  const [body, setBody] = useState(markdownPost ? markdownPost.body : '');

  const onClickUpdate = useCallback(
    async (id: number, markdownPost: CreateMarkdownPostApiRequest) => {
      try {
        const confirm = window.confirm(`記事を更新しますか？`);
        if (confirm) {
          await updateMarkdownPostApiClient(id, markdownPost);
          alert('更新が完了しました。');
        }
      } catch (e) {
        console.error(e);
        alert('更新に失敗しました。');
      }
    },
    [],
  );

  const onClickDelete = useCallback(async (id: number) => {
    try {
      const confirm = window.confirm('記事を削除しますか？');
      if (confirm) {
        await deleteMarkdownPostApiClient(id);
        alert('記事を削除しました。');
        router.push(paths.admin.markdownPosts.index);
      }
    } catch (e) {
      console.error(e);
      alert('記事の削除に失敗しました。');
    }
  }, []);

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>マークダウン記事編集</AdminPageTitle>

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
        <DeleteButton
          onClick={() => onClickDelete(markdownPost.id)}
          icon={<DeleteIcon />}
        >
          記事を削除
        </DeleteButton>
        <UpdateButton
          onClick={() =>
            onClickUpdate(markdownPost.id, { title: title, body: body })
          }
          icon={<SendIcon />}
        >
          記事を更新
        </UpdateButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostEditTemplate;
