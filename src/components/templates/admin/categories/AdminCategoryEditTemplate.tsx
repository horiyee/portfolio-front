import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useCategoryAdminApiClients } from '../../../../hooks/categories';
import { AdminForm, AdminFormItemWrapper } from '../../../../styles/components';
import { Category } from '../../../../types/category';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledInput from '../../../molecules/admin/AdminLabeledInput';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  category: Category | null;
};

const AdminCategoryEditTemplate: React.VFC<Props> = ({ category }) => {
  const router = useRouter();
  const categoryAdminApiClients = useCategoryAdminApiClients();

  const [categoryName, setCategoryName] = useState(category.name);

  return (
    <AdminTemplate>
      <AdminPageTitle>カテゴリ編集</AdminPageTitle>

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
          color="red"
          icon={<ClearIcon />}
          onClick={() =>
            categoryAdminApiClients.deleteCategory(category.id, categoryName)
          }
        >
          削除
        </AdminBottomActionButton>
        <AdminBottomActionButton
          onClick={() =>
            categoryAdminApiClients.updateCategory(category.id, categoryName)
          }
          icon={<SendIcon />}
        >
          更新
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};
export default AdminCategoryEditTemplate;
