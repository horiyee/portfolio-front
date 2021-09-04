import { useRouter } from 'next/router';
import React from 'react';
import { paths } from '../../../../config/paths';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

const AdminExternalPostNewTemplate: React.VFC = () => {
  const router = useRouter();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規外部記事</AdminPageTitle>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          icon={<ClearIcon />}
          color="red"
          onClick={() => router.push(paths.admin.externalPosts.index)}
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton icon={<SendIcon />} onClick={() => {}}>
          登録
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminExternalPostNewTemplate;
