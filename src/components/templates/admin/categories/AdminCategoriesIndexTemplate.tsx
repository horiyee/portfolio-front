import { useRouter } from 'next/router';
import React from 'react';
import { paths } from '../../../../config/paths';
import { useCategoryAdminApiClients } from '../../../../hooks/categories';
import {
  AdminTable,
  AdminTableData,
  AdminTableHeader,
  AdminTableRow,
  AdminTBody,
  AdminTHead,
  AdminUnderlinedBlueButton,
  AdminUnderlinedBlueLink,
} from '../../../../styles/components';
import { Category } from '../../../../types/category';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AddIcon from '../../../atoms/icons/AddIcon';
import ArrowBackIcon from '../../../atoms/icons/ArrowBackIcon';
import Time from '../../../atoms/Time';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  categories: Category[];
};

const AdminCategoriesIndexTemplate: React.VFC<Props> = ({ categories }) => {
  const router = useRouter();
  const categoryAdminApiClients = useCategoryAdminApiClients();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>カテゴリ管理</AdminPageTitle>

      <AdminTable>
        <AdminTHead>
          <AdminTableRow>
            <AdminTableHeader>ID</AdminTableHeader>
            <AdminTableHeader>カテゴリ名</AdminTableHeader>
            <AdminTableHeader>記事数</AdminTableHeader>
            <AdminTableHeader>作成日</AdminTableHeader>
            <AdminTableHeader>更新日</AdminTableHeader>
            <AdminTableHeader>操作</AdminTableHeader>
          </AdminTableRow>
        </AdminTHead>

        {categories ? (
          <AdminTBody>
            {categories.map((category, index) => (
              <AdminTableRow key={index}>
                <AdminTableData>{category.id}</AdminTableData>
                <AdminTableData>{category.name}</AdminTableData>
                <AdminTableData>{category.posts_count}</AdminTableData>
                <AdminTableData>
                  <Time datetime={category.createdAt} />
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={category.updatedAt} />
                </AdminTableData>
                <AdminTableData>
                  <AdminUnderlinedBlueLink
                    href={`${paths.admin.categories.index}/${category.id}/edit`}
                  >
                    編集
                  </AdminUnderlinedBlueLink>
                  <AdminUnderlinedBlueButton
                    hasMarginLeft
                    onClick={() =>
                      categoryAdminApiClients.deleteCategory(
                        category.id,
                        category.name,
                      )
                    }
                  >
                    削除
                  </AdminUnderlinedBlueButton>
                </AdminTableData>
              </AdminTableRow>
            ))}
          </AdminTBody>
        ) : null}
      </AdminTable>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.index)}
          icon={<ArrowBackIcon />}
        >
          戻る
        </AdminBottomActionButton>
        <AdminBottomActionButton
          onClick={() => router.push(paths.admin.categories.new)}
          icon={<AddIcon />}
        >
          追加
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminCategoriesIndexTemplate;
