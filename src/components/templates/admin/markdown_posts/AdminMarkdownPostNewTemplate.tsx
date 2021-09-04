import React, { useState } from 'react';
import styled from 'styled-components';
import { paths } from '../../../../config/paths';
import { useMarkdownPostAdminApiClients } from '../../../../hooks/markdownPosts';
import AdminCancelButton from '../../../atoms/admin/AdminCancelButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminMarkdownPostEditor from '../../../organisms/admin/AdminMarkdownPostEditor';
import AdminTemplate from '../../common/AdminTemplate';

const PostButton = styled(BasicButton)``;

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
        <AdminCancelButton pathToBack={paths.admin.markdownPosts.index}>
          やめる
        </AdminCancelButton>
        <PostButton
          onClick={() =>
            markdownPostAdminApiClients.postMarkdownPost(title, body)
          }
          icon={<SendIcon />}
        >
          記事を投稿
        </PostButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostNewTemplate;
