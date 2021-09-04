import styled from 'styled-components';
import { mqPc } from './mixins';

export const SideNavigationWrapper = styled.div`
  display: none;
  ${mqPc(`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 100vh;
  `)};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${mqPc(`padding-left: 320px;`)};
`;

export const AdminTable = styled.table`
  display: inline-block;
  width: 100%;
  padding: 48px 0;
`;

export const AdminTHead = styled.thead`
  height: 48px;
`;

export const AdminTableHeader = styled.th`
  padding: 0 8px;
`;

export const AdminTBody = styled.tbody``;

export const AdminTableRow = styled.tr`
  height: 64px;
`;

export const AdminTableData = styled.td`
  padding: 0 8px;
`;
