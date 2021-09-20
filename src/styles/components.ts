import styled from 'styled-components';
import NextLink from '../components/atoms/NextLink';
import { fontSize, mqPc, mqSp, mqTablet } from './mixins';
import { fontFamilies, underlinedBlueLinkStyle } from './variables';

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

export const AdminUnderlinedBlueLink = styled(NextLink)`
  ${underlinedBlueLinkStyle};
`;

type AdminUnderlinedBlueButtonProps = {
  hasMarginLeft?: boolean;
};
export const AdminUnderlinedBlueButton = styled.button<AdminUnderlinedBlueButtonProps>`
  margin-left: ${props => (props.hasMarginLeft ? '8px' : '0')};
  ${underlinedBlueLinkStyle};
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

export const AdminForm = styled.form`
  display: inline-block;
  width: 100%;
`;

export const AdminFormItemWrapper = styled.div`
  padding: 8px 0;
  margin: 8px 0;
`;

export const TechnologyMainContentsWrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding: 32px 0;
`;

export const TechnologyMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mqSp(`
    flex-direction: column;
    align-items: flex-start;
  `)}

  width: 100%;
  padding: 8px 0;
`;

export const MobilePageTitle = styled.h1`
  ${mqPc(`display: none`)};

  text-align: center;
  text-transform: uppercase;

  font-family: ${fontFamilies.enFont};
  font-weight: 400;
  ${fontSize(28)};

  letter-spacing: 2px;

  padding: 32px 0 48px 0;
`;
