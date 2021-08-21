import React from 'react';
import styled from 'styled-components';
import { paths } from '../../config/paths';
import { fontSize, mqPc } from '../../styles/mixins';
import { colors, fontFamilies } from '../../styles/variables';
import NextLink from '../atoms/NextLink';

const Root = styled.header`
  ${mqPc(`display: none;`)}

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  width: 100%;

  padding: 16px 32px;

  border-bottom: 1px solid ${colors.borderGray};

  background: ${colors.white};
`;

const IndexLink = styled(NextLink)`
  font-family: ${fontFamilies.enFont};
  ${fontSize(20)};
  font-weight: 400;

  text-transform: uppercase;
`;

const Header: React.VFC = () => {
  return (
    <Root>
      <IndexLink href={paths.index}>
        Portfolio of
        <br />
        Kaito Horiuchi
      </IndexLink>
    </Root>
  );
};

export default Header;
