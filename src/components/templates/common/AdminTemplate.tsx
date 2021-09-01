import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { envVariables } from '../../../config/envVariables';
import { paths } from '../../../config/paths';
import LoadingContainer from '../../molecules/LoadingContainer';
import AdminHeader from '../../organisms/admin/AdminHeader';

type Props = {
  children?: React.ReactNode;
  hasBottomActionBar?: boolean;
};

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

type ContentsWrapperProps = {
  hasBottomActionBar?: boolean;
};
const ContentsWrapper = styled.div<ContentsWrapperProps>`
  display: inline-block;
  width: 100%;
  padding: calc(64px + 32px) 32px
    ${props => (props.hasBottomActionBar ? 'calc(64px + 32px)' : '32px')} 32px;
`;

const Main = styled.main`
  display: inline-block;
  width: 100%;
`;

const AdminTemplate: React.VFC<Props> = ({ children, hasBottomActionBar }) => {
  const router = useRouter();
  const { pathname, isReady } = router;

  const [session, loading] = useSession();

  useEffect(() => {
    if (isReady) {
      if (pathname.includes('admin')) {
        if (loading === false) {
          if (session === null) {
            signIn();
            return;
          }
          if (
            session.user.email !== envVariables.GITHUB_OAUTH_ALLOW_USER_EMAIL
          ) {
            router.push(paths.index);
          }
        }
      }
    }
  }, [session, loading, pathname, isReady]);

  return (
    <Root>
      <AdminHeader />

      <ContentsWrapper hasBottomActionBar={hasBottomActionBar}>
        <Main>{loading ? <LoadingContainer /> : children}</Main>
      </ContentsWrapper>
    </Root>
  );
};

export default AdminTemplate;
