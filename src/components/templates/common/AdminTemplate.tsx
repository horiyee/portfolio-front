import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AdminHeader from '../../organisms/admin/AdminHeader';

type Props = {
  children?: React.ReactNode;
};

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const ContentsWrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding-top: 64px;
`;

const Main = styled.main`
  display: inline-block;
  width: 100%;
`;

const AdminTemplate: React.VFC<Props> = ({ children }) => {
  const router = useRouter();
  const { pathname, isReady } = router;

  const [session, loading] = useSession();

  useEffect(() => {
    if (isReady) {
      if (pathname.includes('admin')) {
        if (loading === false && session === null) {
          signIn();
        }
      }
    }
  }, [session, loading, pathname, isReady]);

  return (
    <Root>
      <AdminHeader />

      <ContentsWrapper>
        <Main>{children}</Main>
      </ContentsWrapper>
    </Root>
  );
};

export default AdminTemplate;
