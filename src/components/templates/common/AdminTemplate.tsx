import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { envVariables } from '../../../config/envVariables';
import { paths } from '../../../config/paths';
import { MetaData } from '../../../types';
import NextHead from '../../atoms/NextHead';
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

  // TODO: implement custom hooks

  const isAllowedAdminUserLoggedIn = useMemo(() => {
    if (loading) {
      return false;
    }

    if (session === null) {
      return false;
    }

    if (session.user.email === envVariables.GITHUB_OAUTH_ALLOW_USER_EMAIL) {
      return true;
    }

    return false;
  }, [session, loading]);

  useEffect(() => {
    if (isReady) {
      if (pathname.includes('admin')) {
        if (loading === false) {
          if (session === null) {
            signIn();
            return;
          }
          if (isAllowedAdminUserLoggedIn === false) {
            router.push(paths.index);
          }
        }
      }
    }
  }, [session, loading, pathname, isReady]);

  const metaData: MetaData = {
    pageTitle: 'Admin',
    pagePath: paths.admin.index,
    noIndex: true,
  };

  return (
    <Root>
      <NextHead {...metaData} />

      <AdminHeader />

      <ContentsWrapper hasBottomActionBar={hasBottomActionBar}>
        <Main>
          {loading || isAllowedAdminUserLoggedIn === false ? (
            <LoadingContainer />
          ) : (
            children
          )}
        </Main>
      </ContentsWrapper>
    </Root>
  );
};

export default AdminTemplate;
