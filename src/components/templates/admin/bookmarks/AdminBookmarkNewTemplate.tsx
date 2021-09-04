import router from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useBookmarkAdminApiClients } from '../../../../hooks/bookmarks';
import { AdminFormItemWrapper } from '../../../../styles/components';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AddIcon from '../../../atoms/icons/AddIcon';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledInput from '../../../molecules/admin/AdminLabeledInput';
import AdminTemplate from '../../common/AdminTemplate';

const AdminBookmarkNewTemplate: React.VFC = () => {
  const bookmarkAdminApiClients = useBookmarkAdminApiClients();

  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規ブックマーク</AdminPageTitle>

      <AdminFormItemWrapper>
        <AdminLabeledInput label="URL" value={url} setValue={setUrl} />
      </AdminFormItemWrapper>
      <AdminFormItemWrapper>
        <AdminLabeledInput
          label="備考"
          value={description}
          setValue={setDescription}
        />
      </AdminFormItemWrapper>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.bookmarks.index)}
          icon={<ClearIcon />}
          color="red"
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          icon={<AddIcon />}
          onClick={() => bookmarkAdminApiClients.postBookmark(url, description)}
        >
          登録
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarkNewTemplate;
