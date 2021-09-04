import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../../config/paths';
import {
  AdminTable,
  AdminTableData,
  AdminTableHeader,
  AdminTableRow,
  AdminTBody,
  AdminTHead,
} from '../../../../styles/components';
import { underlinedBlueLinkStyle } from '../../../../styles/variables';
import { ExternalPost } from '../../../../types/externalPost';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import AddIcon from '../../../atoms/icons/AddIcon';
import ArrowBackIcon from '../../../atoms/icons/ArrowBackIcon';
import NextImage from '../../../atoms/NextImage';
import NextLink from '../../../atoms/NextLink';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  externalPosts: ExternalPost[];
};

const Link = styled(NextLink)`
  ${underlinedBlueLinkStyle};
`;

const AdminExternalPostsIndexTemplate: React.VFC<Props> = ({
  externalPosts,
}) => {
  const router = useRouter();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>外部記事管理</AdminPageTitle>

      <AdminTable>
        <AdminTHead>
          <AdminTableRow>
            <AdminTableHeader>ID</AdminTableHeader>
            <AdminTableHeader>タイトル</AdminTableHeader>
            <AdminTableHeader>リンク先</AdminTableHeader>
            <AdminTableHeader>サムネイル</AdminTableHeader>
            <AdminTableHeader>公開日時</AdminTableHeader>
            <AdminTableHeader>登録日時</AdminTableHeader>
            <AdminTableHeader>更新日時</AdminTableHeader>
          </AdminTableRow>
        </AdminTHead>

        {externalPosts ? (
          <AdminTBody>
            {externalPosts.map((externalPost, index) => (
              <AdminTableRow key={index}>
                <AdminTableData>{externalPost.id}</AdminTableData>
                <AdminTableData>{externalPost.title}</AdminTableData>
                <AdminTableData>
                  <Link href={externalPost.url}>開く（新規タブ）</Link>
                </AdminTableData>
                <AdminTableData>
                  <NextImage
                    src={externalPost.thumbnailUrl}
                    alt={`外部記事${externalPost.title}のサムネイル`}
                  />
                </AdminTableData>
                <AdminTableData>{externalPost.createdAt}</AdminTableData>
                <AdminTableData>{externalPost.updatedAt}</AdminTableData>
                <AdminTableData>{externalPost.publishedAt}</AdminTableData>
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
