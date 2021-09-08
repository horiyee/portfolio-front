import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { useBookmarkAdminApiClients } from '../../../../hooks/bookmarks';
import { AdminFormItemWrapper } from '../../../../styles/components';
import { Bookmark } from '../../../../types/bookmark';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import DeleteIcon from '../../../atoms/icons/DeleteIcon';
import SendIcon from '../../../atoms/icons/SendIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledInput from '../../../molecules/admin/AdminLabeledInput';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  bookmark: Bookmark;
};

const AdminBookmarkEditTemplate: React.VFC<Props> = ({ bookmark }) => {
  const [url, setUrl] = useState(bookmark.url);
  const [description, setDescription] = useState(bookmark.description);

  const router = useRouter();
  const bookmarkAdminApiClients = useBookmarkAdminApiClients();

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>ブックマーク編集</AdminPageTitle>

      <AdminFormItemWrapper>
        <AdminLabeledInput label="URL" value={url} setValue={setUrl} />
      </AdminFormItemWrapper>
      <AdminFormItemWrapper>
        <AdminLabeledInput
          label="備考"
          value={description}
          setValue={setDescription}
        />
      </AdminFormItemWrapper>

      <AdminBottomActionBar>
        <AdminBottomActionButton
          icon={<ClearIcon />}
          color="red"
          onClick={() => router.push(paths.admin.bookmarks.index)}
        >
          やめる
        </AdminBottomActionButton>
        <AdminBottomActionButton
          color="red"
          icon={<DeleteIcon />}
          onClick={() =>
            bookmarkAdminApiClients.deleteBookmark(
              bookmark.id,
              bookmark.description,
            )
          }
        >
          削除
        </AdminBottomActionButton>
        <AdminBottomActionButton
          icon={<SendIcon />}
          onClick={() =>
            bookmarkAdminApiClients.updateBookmark(
              bookmark.id,
              url,
              description,
            )
          }
        >
          更新
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarkEditTemplate;
