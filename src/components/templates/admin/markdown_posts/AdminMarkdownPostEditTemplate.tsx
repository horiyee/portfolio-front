import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { paths } from '../../../../config/paths';
import { useMarkdownPostAdminApiClients } from '../../../../hooks/markdownPosts';
import { colors } from '../../../../styles/variables';
import { MarkdownPost } from '../../../../types/markdownPost';
import AdminCancelButton from '../../../atoms/admin/AdminCancelButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import DeleteIcon from '../../../atoms/icons/DeleteIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  markdownPost: MarkdownPost | null;
};

const DeleteButton = styled(BasicButton)`
  color: ${colors.error};
  fill: ${colors.error};
`;

const UpdateButton = styled(BasicButton)``;

const AdminMarkdownPostEditTemplate: React.VFC<Props> = ({ markdownPost }) => {
  const router = useRouter();
  const markdownPostAdminApiClients = useMarkdownPostAdminApiClients();

  if (markdownPost === null) {
    router.push(paths.notFound);
    return null;
  }

  const [title, setTitle] = useState(markdownPost ? markdownPost.title : '');
  const [body, setBody] = useState(markdownPost ? markdownPost.body : '');

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
        <AdminCancelButton pathToBack={paths.admin.markdownPosts.index}>
          やめる
        </AdminCancelButton>
        <DeleteButton
          onClick={() =>
            markdownPostAdminApiClients.deleteMarkdownPost(markdownPost.id)
          }
          icon={<DeleteIcon />}
        >
          記事を削除
        </DeleteButton>
        <UpdateButton
          onClick={() =>
            markdownPostAdminApiClients.updateMarkdownPost(
              markdownPost.id,
              title,
              body,
            )
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
