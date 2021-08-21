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
