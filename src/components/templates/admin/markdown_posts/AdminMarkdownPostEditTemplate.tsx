import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useMarkdownPostAdminApiClients } from '../../../../hooks/markdownPosts';
import { MarkdownPost } from '../../../../types/markdownPost';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import DeleteIcon from '../../../atoms/icons/DeleteIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  markdownPost: MarkdownPost;
};

const AdminMarkdownPostEditTemplate: React.VFC<Props> = ({ markdownPost }) => {
  const router = useRouter();
  const markdownPostAdminApiClients = useMarkdownPostAdminApiClients();

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
        <AdminBottomActionButton
          color="red"
          icon={<ClearIcon />}
          onClick={() => router.push(paths.admin.markdownPosts.index)}
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          color="red"
          onClick={() =>
            markdownPostAdminApiClients.deleteMarkdownPost(
              markdownPost.id,
              markdownPost.title,
            )
          }
          icon={<DeleteIcon />}
        >
          削除
        </AdminBottomActionButton>
        <AdminBottomActionButton
          onClick={() =>
            markdownPostAdminApiClients.updateMarkdownPost(
              markdownPost.id,
              title,
              body,
            )
          }
          icon={<SendIcon />}
        >
          更新
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostEditTemplate;
