import { useRouter } from 'next/router';
import React from 'react';
import { paths } from '../../../../config/paths';
import AdminBackButton from '../../../atoms/admin/AdminBackButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import AddIcon from '../../../atoms/icons/AddIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

const AdminBookmarksIndexTemplate: React.VFC = () => {
  const router = useRouter();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>ブックマーク管理</AdminPageTitle>

      <AdminBottomActionBar>
        <AdminBackButton pathToBack={paths.admin.index}>戻る</AdminBackButton>
        <BasicButton
          icon={<AddIcon />}
          onClick={() => router.push(paths.admin.bookmarks.new)}
        >
          追加
        </BasicButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarksIndexTemplate;
