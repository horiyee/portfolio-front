import { useRouter } from 'next/router';
import React from 'react';
import { paths } from '../../../../config/paths';
import { useExternalPostAdminApiClients } from '../../../../hooks/externalPosts';
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
import { ExternalPost } from '../../../../types/externalPost';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AddIcon from '../../../atoms/icons/AddIcon';
import ArrowBackIcon from '../../../atoms/icons/ArrowBackIcon';
import Time from '../../../atoms/Time';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  externalPosts: ExternalPost[];
};

const AdminExternalPostsIndexTemplate: React.VFC<Props> = ({
  externalPosts,
}) => {
  const router = useRouter();
  const externalPostAdminApiClients = useExternalPostAdminApiClients();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>外部記事管理</AdminPageTitle>

      <AdminTable>
        <AdminTHead>
          <AdminTableRow>
            <AdminTableHeader>ID</AdminTableHeader>
            <AdminTableHeader>カテゴリ</AdminTableHeader>
            <AdminTableHeader>タイトル</AdminTableHeader>
            <AdminTableHeader>リンク先</AdminTableHeader>
            <AdminTableHeader>サムネイル</AdminTableHeader>
            <AdminTableHeader>公開日時</AdminTableHeader>
            <AdminTableHeader>登録日時</AdminTableHeader>
            <AdminTableHeader>更新日時</AdminTableHeader>
            <AdminTableHeader>操作</AdminTableHeader>
          </AdminTableRow>
        </AdminTHead>

        {externalPosts ? (
          <AdminTBody>
            {externalPosts.map((externalPost, index) => (
              <AdminTableRow key={index}>
                <AdminTableData>{externalPost.id}</AdminTableData>
                <AdminTableData>{externalPost.categoryName}</AdminTableData>
                <AdminTableData>
                  {externalPost.title.length > 30
                    ? `${externalPost.title.slice(0, 30)}…`
                    : externalPost.title}
                </AdminTableData>
                <AdminTableData>
                  <AdminUnderlinedBlueLink href={externalPost.url}>
                    開く（新規タブ）
                  </AdminUnderlinedBlueLink>
                </AdminTableData>
                <AdminTableData>
                  <AdminUnderlinedBlueLink href={externalPost.thumbnailUrl}>
                    開く（新規タブ）
                  </AdminUnderlinedBlueLink>
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={externalPost.publishedAt} />
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={externalPost.createdAt} />
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={externalPost.updatedAt} />
                </AdminTableData>
                <AdminTableData>
                  <AdminUnderlinedBlueLink
                    href={`${paths.admin.externalPosts.index}/${externalPost.id}/edit`}
                  >
                    編集
                  </AdminUnderlinedBlueLink>
                  <AdminUnderlinedBlueButton
                    hasMarginLeft
                    onClick={() =>
                      externalPostAdminApiClients.deleteExternalPost(
                        externalPost.id,
                        externalPost.title,
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
          icon={<ArrowBackIcon />}
          onClick={() => router.push(paths.admin.index)}
        >
          戻る
        </AdminBottomActionButton>
        <AdminBottomActionButton
          icon={<AddIcon />}
          onClick={() => router.push(paths.admin.externalPosts.new)}
        >
          追加
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminExternalPostsIndexTemplate;
