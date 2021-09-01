import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../../config/paths';
import { MarkdownPost } from '../../../../types/markdownPost';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import NextLink from '../../../atoms/NextLink';
import Time from '../../../atoms/Time';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  markdownPosts: MarkdownPost[];
};

const BackButton = styled(BasicButton)``;

const CreateButton = styled(BasicButton)``;

const AdminMarkdownPostsIndexTemplate: React.VFC<Props> = ({
  markdownPosts,
}) => {
  const router = useRouter();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>マークダウン記事管理</AdminPageTitle>

      {markdownPosts.map((p, index) => (
        <NextLink
          href={`${paths.admin.markdownPosts.index}/${p.id}/edit`}
          key={index}
        >
          <article>
            <h1>{p.title}</h1>
            <p>{p.body}</p>

            <Time datetime={p.updatedAt} />
          </article>
        </NextLink>
      ))}

      <AdminBottomActionBar>
        <BackButton onClick={() => router.push(paths.admin.index)}>
          戻る
        </BackButton>
        <CreateButton
          onClick={() => router.push(paths.admin.markdownPosts.new)}
        >
          記事を書く
        </CreateButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostsIndexTemplate;
