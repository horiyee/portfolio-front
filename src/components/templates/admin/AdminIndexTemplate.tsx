import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../config/paths';
import { mqSp } from '../../../styles/mixins';
import AdminIndexItem from '../../atoms/admin/AdminIndexItem';
import BookmarksIcon from '../../atoms/icons/BookmarksIcon';
import CategoryIcon from '../../atoms/icons/CategoryIcon';
import DescriptionIcon from '../../atoms/icons/DescriptionIcon';
import LinkIcon from '../../atoms/icons/LinkIcon';
import AdminTemplate from '../common/AdminTemplate';

const AdminItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledAdminIndexItem = styled(AdminIndexItem)`
  margin: 0 16px 32px 16px;
  ${mqSp(`margin-bottom: 24px;`)};
`;

const AdminIndexTemplate: React.VFC = () => {
  return (
    <AdminTemplate>
      <AdminItems>
        <StyledAdminIndexItem
          icon={<DescriptionIcon />}
          href={paths.admin.markdownPosts.index}
        >
          マークダウン記事管理
        </StyledAdminIndexItem>
        <StyledAdminIndexItem
          icon={<LinkIcon />}
          href={paths.admin.externalPosts.index}
        >
          外部記事管理
        </StyledAdminIndexItem>
        <StyledAdminIndexItem
          icon={<CategoryIcon />}
          href={paths.admin.categories.index}
        >
          カテゴリ管理
        </StyledAdminIndexItem>
        <StyledAdminIndexItem
          icon={<BookmarksIcon />}
          href={paths.admin.bookmarks.index}
        >
          ブックマーク管理
        </StyledAdminIndexItem>
      </AdminItems>
    </AdminTemplate>
  );
};

export default AdminIndexTemplate;
