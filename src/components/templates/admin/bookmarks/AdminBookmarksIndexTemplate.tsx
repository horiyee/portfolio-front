import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../../config/paths';
import { useBookmarkAdminApiClients } from '../../../../hooks/bookmarks';
import {
  AdminTable,
  AdminTableData,
  AdminTableHeader,
  AdminTableRow,
  AdminTBody,
  AdminTHead,
} from '../../../../styles/components';
import { colors, underlinedBlueLinkStyle } from '../../../../styles/variables';
import { Bookmark } from '../../../../types/bookmark';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AddIcon from '../../../atoms/icons/AddIcon';
import ArrowBackIcon from '../../../atoms/icons/ArrowBackIcon';
import NextLink from '../../../atoms/NextLink';
import Time from '../../../atoms/Time';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  bookmarks: Bookmark[];
};

const Link = styled(NextLink)`
  ${underlinedBlueLinkStyle};
`;

const Button = styled.button`
  margin-left: 8px;
  ${underlinedBlueLinkStyle};
`;

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
            <AdminTableHeader>リンク先</AdminTableHeader>
            <AdminTableHeader>備考</AdminTableHeader>
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
                <AdminTableData>
                  <Link href={bookmark.url}>
                    開く{bookmark.url.includes('http') ? '（新規タブ）' : null}
                  </Link>
                </AdminTableData>
                <AdminTableData>{bookmark.description}</AdminTableData>
                <AdminTableData>
                  <Time datetime={bookmark.createdAt} />
                </AdminTableData>
                <AdminTableData>
                  <Time datetime={bookmark.updatedAt} />
                </AdminTableData>
                <AdminTableData>
                  <Link
                    href={`${paths.admin.bookmarks.index}/${bookmark.id}/edit`}
                  >
                    編集
                  </Link>
                  <Button
                    onClick={() =>
                      bookmarkAdminApiClients.deleteBookmark(bookmark.id)
                    }
                  >
                    削除
                  </Button>
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
