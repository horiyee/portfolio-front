import { useRouter } from 'next/router';
import React from 'react';
import { paths } from '../../../../config/paths';
import { useBookmarkAdminApiClients } from '../../../../hooks/bookmarks';
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
import { Bookmark } from '../../../../types/bookmark';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AddIcon from '../../../atoms/icons/AddIcon';
import ArrowBackIcon from '../../../atoms/icons/ArrowBackIcon';
import Time from '../../../atoms/Time';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  bookmarks: Bookmark[];
};

const AdminBookmarksIndexTemplate: React.VFC<Props> = ({ bookmarks }) => {
  const router = useRouter();
  const bookmarkAdminApiClients = useBookmarkAdminApiClients();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>ブックマーク管理</AdminPageTitle>

      <AdminTable>
        <AdminTHead>
          <AdminTableRow>
            <AdminTableHeader>ID</AdminTableHeader>
            <AdminTableHeader>カテゴリ</AdminTableHeader>
            <AdminTableHeader>リンク先</AdminTableHeader>
            <AdminTableHeader>ひとくちメモ</AdminTableHeader>
            <AdminTableHeader>作成日時</AdminTableHeader>
            <AdminTableHeader>更新日時</AdminTableHeader>
            <AdminTableHeader>操作</AdminTableHeader>
          </AdminTableRow>
        </AdminTHead>

        {bookmarks ? (
          <AdminTBody>
            {bookmarks.map((bookmark, index) => (
              <AdminTableRow key={index}>
                <AdminTableData>{bookmark.id}</AdminTableData>
                <AdminTableData>{bookmark.categoryName}</AdminTableData>
                <AdminTableData>
                  <AdminUnderlinedBlueLink href={bookmark.url}>
                    開く{bookmark.url.includes('http') ? '（新規タブ）' : null}
                  </AdminUnderlinedBlueLink>
                </AdminTableData>
                <AdminTableData>
                  {bookmark.description.length > 25
                    ? `${bookmark.description.slice(0, 25)}…`
                    : bookmark.description}
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={bookmark.createdAt} />
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={bookmark.updatedAt} />
                </AdminTableData>
                <AdminTableData>
                  <AdminUnderlinedBlueLink
                    href={`${paths.admin.bookmarks.index}/${bookmark.id}/edit`}
                  >
                    編集
                  </AdminUnderlinedBlueLink>
                  <AdminUnderlinedBlueButton
                    hasMarginLeft
                    onClick={() =>
                      bookmarkAdminApiClients.deleteBookmark(
                        bookmark.id,
                        bookmark.description,
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
          icon={<AddIcon />}
          onClick={() => router.push(paths.admin.bookmarks.new)}
        >
          追加
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarksIndexTemplate;
