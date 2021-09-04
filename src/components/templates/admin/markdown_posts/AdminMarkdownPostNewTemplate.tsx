import router from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useMarkdownPostAdminApiClients } from '../../../../hooks/markdownPosts';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

const AdminMarkdownPostNewTemplate: React.VFC = () => {
  const markdownPostAdminApiClients = useMarkdownPostAdminApiClients();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.markdownPosts.index)}
          icon={<ClearIcon />}
          color="red"
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          onClick={() =>
            markdownPostAdminApiClients.postMarkdownPost(title, body)
          }
          icon={<SendIcon />}
        >
          投稿
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostNewTemplate;
