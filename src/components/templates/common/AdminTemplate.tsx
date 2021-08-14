import React from 'react';
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
