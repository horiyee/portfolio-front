import router from 'next/router';
import React, { useState } from 'react';
import { paths } from '../../../../config/paths';
import { Bookmark } from '../../../../types/bookmark';
import AdminBottomActionButton from '../../../atoms/admin/AdminBottomActionButton';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import AdminLabeledInput from '../../../molecules/admin/AdminLabeledInput';
import AdminTemplate from '../../common/AdminTemplate';

type Props = {
  bookmark: Bookmark;
};

const AdminBookmarkEditTemplate: React.VFC<Props> = ({ bookmark }) => {
  const [url, setUrl] = useState(bookmark.url);

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminLabeledInput label="URL" value={url} setValue={setUrl} />

      <AdminBottomActionBar>
        <AdminBottomActionButton
          icon={<ClearIcon />}
          color="red"
          onClick={() => router.push(paths.admin.bookmarks.index)}
        >
          やめる
        </AdminBottomActionButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminBookmarkEditTemplate;
