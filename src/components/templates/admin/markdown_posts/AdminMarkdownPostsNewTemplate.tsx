import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { paths } from '../../../../config/paths';
import { colors } from '../../../../styles/variables';
import AdminPageTitle from '../../../atoms/admin/AdminPageTitle';
import BasicButton from '../../../atoms/buttons/BasicButton';
import ClearIcon from '../../../atoms/icons/ClearIcon';
import Icon from '../../../atoms/icons/Icon';
import SendIcon from '../../../atoms/icons/SendIcon';
import Input from '../../../atoms/Input';
import AdminBottomActionBar from '../../../molecules/admin/AdminBottomActionBar';
import MarkdownEditor from '../../../organisms/MarkdownEditor';
import AdminTemplate from '../../common/AdminTemplate';

const Form = styled.form`
  width: 100%;
`;

const ItemWrapper = styled.div`
  padding: 8px 0;
  margin: 8px 0;
`;

const Label = styled.label`
  line-height: 2;
`;

const TitleInput = styled(Input)`
  width: 100%;
`;

const StyledClearIcon = styled(Icon)`
  fill: ${colors.error};
`;

const CancelButton = styled(BasicButton)`
  color: ${colors.error};
`;

const PostButton = styled(BasicButton)``;

const AdminMarkdownPostsNewTemplate: React.VFC = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <AdminTemplate hasBottomActionBar>
      <AdminPageTitle>新規マークダウン記事</AdminPageTitle>

      <Form>
        <ItemWrapper>
          <Label>
            タイトル
            <TitleInput value={title} onChange={setTitle} />
          </Label>
        </ItemWrapper>
        <ItemWrapper>
          <Label>
            本文（マークダウン形式）
            <MarkdownEditor markdown={body} setMarkdown={setBody} />
          </Label>
        </ItemWrapper>
      </Form>

      <AdminBottomActionBar>
        <CancelButton
          onClick={() => router.push(paths.admin.markdownPosts.index)}
          icon={<StyledClearIcon icon={<ClearIcon />} />}
        >
          やめる
        </CancelButton>
        <PostButton onClick={() => {}} icon={<Icon icon={<SendIcon />} />}>
          記事を投稿
        </PostButton>
      </AdminBottomActionBar>
    </AdminTemplate>
  );
};

export default AdminMarkdownPostsNewTemplate;
