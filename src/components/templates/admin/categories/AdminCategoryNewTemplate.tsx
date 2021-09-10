import router from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useCategoryAdminApiClients } from '../../../../hooks/categories';
import { AdminForm, AdminFormItemWrapper } from '../../../../styles/components';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AddIcon from '../../../atoms/icons/AddIcon';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledInput from '../../../molecules/admin/AdminLabeledInput';
import AdminTemplate from '../../common/AdminTemplate';

const AdminCategoryNewTemplate: React.VFC = () => {
  const categoryAdminApiClients = useCategoryAdminApiClients();

  const [categoryName, setCategoryName] = useState('');

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規カテゴリ</AdminPageTitle>

      <AdminForm>
        <AdminFormItemWrapper>
          <AdminLabeledInput
            label="カテゴリ名"
            value={categoryName}
            setValue={setCategoryName}
          />
        </AdminFormItemWrapper>
      </AdminForm>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          color="red"
          onClick={() => router.push(paths.admin.categories.index)}
          icon={<ClearIcon />}
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          onClick={() => categoryAdminApiClients.postCategory(categoryName)}
          icon={<AddIcon />}
        >
          追加
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminCategoryNewTemplate;
