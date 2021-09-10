import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { paths } from '../../../../config/paths';
import { useGetCategorySelectorOptions } from '../../../../hooks/categories';
import { useExternalPostAdminApiClients } from '../../../../hooks/externalPosts';
import { AdminForm, AdminFormItemWrapper } from '../../../../styles/components';
import { SelectorOption } from '../../../../types';
import { Category } from '../../../../types/category';
import { ExternalPost } from '../../../../types/externalPost';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminFormLabel from '../../../atoms/admin/AdminFormLabel';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledInput from '../../../molecules/admin/AdminLabeledInput';
import AdminLabeledSelector from '../../../molecules/admin/AdminLabeledSelector';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  externalPost: ExternalPost;
  categories: Category[];
};

const ThumbnailPreview = styled.img`
  width: 100%;
  aspect-ratio: 1200 / 630;
`;

const AdminExternalPostEditTemplate: React.VFC<Props> = ({
  externalPost,
  categories,
}) => {
  const router = useRouter();
  const getCategorySelectorOptions = useGetCategorySelectorOptions();
  const externalPostAdminApiClients = useExternalPostAdminApiClients();

  const [title, setTitle] = useState(externalPost.title);
  const [url, setUrl] = useState(externalPost.url);
  const [thumbnailUrl, setThumbnailUrl] = useState(externalPost.thumbnailUrl);
  const [categoryId, setCategoryId] = useState(String(externalPost.categoryId));
  const [publishedAt, setPublishedAt] = useState(externalPost.publishedAt);

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>外部記事編集</AdminPageTitle>

      <AdminForm>
        <AdminFormItemWrapper>
          <AdminLabeledInput
            label="タイトル"
            value={title}
            setValue={setTitle}
          />
        </AdminFormItemWrapper>
        <AdminFormItemWrapper>
          <AdminLabeledInput label="URL" value={url} setValue={setUrl} />
        </AdminFormItemWrapper>
        <AdminFormItemWrapper>
          <AdminLabeledInput
            label="サムネイルURL"
            value={thumbnailUrl}
            setValue={setThumbnailUrl}
          />
        </AdminFormItemWrapper>
        <AdminFormItemWrapper>
          <AdminLabeledSelector
            label="カテゴリ"
            options={getCategorySelectorOptions(categories)}
            value={categoryId}
            setValue={setCategoryId}
          />
        </AdminFormItemWrapper>
        <AdminFormItemWrapper>
          <AdminLabeledInput
            label="公開日時"
            type="datetime-local"
            value={publishedAt}
            setValue={setPublishedAt}
          />
        </AdminFormItemWrapper>
        <AdminFormItemWrapper>
          <AdminFormLabel>サムネイル画像プレビュー</AdminFormLabel>
          {thumbnailUrl ? (
            <ThumbnailPreview
              src={thumbnailUrl}
              alt="サムネイル画像プレビュー"
            />
          ) : null}
        </AdminFormItemWrapper>
      </AdminForm>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          icon={<ClearIcon />}
          color="red"
          onClick={() => router.push(paths.admin.externalPosts.index)}
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          color="red"
          icon={<ClearIcon />}
          onClick={() =>
            externalPostAdminApiClients.deleteExternalPost(
              externalPost.id,
              title,
            )
          }
        >
          削除
        </AdminBottomActionButton>
        <AdminBottomActionButton
          icon={<SendIcon />}
          onClick={() =>
            externalPostAdminApiClients.updateExternalPost(
              externalPost.id,
              title,
              url,
              thumbnailUrl,
              categoryId,
              publishedAt,
            )
          }
        >
          登録
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminExternalPostEditTemplate;
