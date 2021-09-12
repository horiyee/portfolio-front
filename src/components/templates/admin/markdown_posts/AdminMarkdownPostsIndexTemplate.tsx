import { useRouter } from 'next/router';
import React from 'react';
import { paths } from '../../../../config/paths';
import { useMarkdownPostAdminApiClients } from '../../../../hooks/markdownPosts';
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
import { MarkdownPost } from '../../../../types/markdownPost';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ArrowBackIcon from '../../../atoms/icons/ArrowBackIcon';
import CreateIcon from '../../../atoms/icons/CreateIcon';
import Time from '../../../atoms/Time';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  markdownPosts: MarkdownPost[] | null;
};

const AdminMarkdownPostsIndexTemplate: React.VFC<Props> = ({
  markdownPosts,
}) => {
  const router = useRouter();
  const markdownPostAdminApiClients = useMarkdownPostAdminApiClients();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>マークダウン記事管理</AdminPageTitle>

      <AdminTable>
        <AdminTHead>
          <AdminTableRow>
            <AdminTableHeader>ID</AdminTableHeader>
            <AdminTableHeader>カテゴリ</AdminTableHeader>
            <AdminTableHeader>タイトル</AdminTableHeader>
            <AdminTableHeader>状態</AdminTableHeader>
            <AdminTableHeader>作成日時</AdminTableHeader>
            <AdminTableHeader>更新日時</AdminTableHeader>
            <AdminTableHeader>操作</AdminTableHeader>　
          </AdminTableRow>
        </AdminTHead>

        {markdownPosts ? (
          <AdminTBody>
            {markdownPosts.map((markdownPost, index) => (
              <AdminTableRow key={index}>
                <AdminTableData>{markdownPost.id}</AdminTableData>
                <AdminTableData>{markdownPost.categoryName}</AdminTableData>
                <AdminTableData>{markdownPost.title}</AdminTableData>
                <AdminTableData>
                  {markdownPost.publish ? '公開中' : '非公開'}
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={markdownPost.createdAt} />
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={markdownPost.updatedAt} />
                </AdminTableData>
                <AdminTableData>
                  <AdminUnderlinedBlueLink
                    href={`${paths.admin.markdownPosts.index}/${markdownPost.id}/edit`}
                  >
                    編集
                  </AdminUnderlinedBlueLink>
                  <AdminUnderlinedBlueButton
                    hasMarginLeft
                    onClick={() =>
                      markdownPostAdminApiClients.deleteMarkdownPost(
                        markdownPost.id,
                        markdownPost.title,
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
          onClick={() => router.push(paths.admin.markdownPosts.new)}
          icon={<CreateIcon />}
        >
          記事を書く
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostsIndexTemplate;
