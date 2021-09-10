import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useBookmarkAdminApiClients } from '../../../../hooks/bookmarks';
import { AdminForm, AdminFormItemWrapper } from '../../../../styles/components';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledInput from '../../../molecules/admin/AdminLabeledInput';
import AdminTemplate from '../../common/AdminTemplate';

const AdminBookmarkNewTemplate: React.VFC = () => {
  const router = useRouter();
  const bookmarkAdminApiClients = useBookmarkAdminApiClients();

  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規ブックマーク</AdminPageTitle>

      <AdminForm>
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
      </AdminForm>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.bookmarks.index)}
          icon={<ClearIcon />}
          color="red"
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          icon={<SendIcon />}
          onClick={() => bookmarkAdminApiClients.postBookmark(url, description)}
        >
          登録
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarkNewTemplate;
