import React from 'react';
import styled from 'styled-components';
import { mqPc, mqSp, mqTablet } from '../../styles/mixins';

type Props = {
  pc?: boolean;
  tablet?: boolean;
  sp?: boolean;
};

type RootProps = {
  pc?: boolean;
  tablet?: boolean;
  sp?: boolean;
};
const Root = styled.br<RootProps>`
  display: none;
  ${props => (props.pc ? mqPc(`display: initial;`) : '')}
  ${props => (props.tablet ? mqTablet(`display: initial;`) : '')}
  ${props => (props.sp ? mqSp(`display: initial;`) : '')}
`;

const ResponsiveBreak: React.VFC<Props> = ({ pc, tablet, sp }) => {
  return <Root pc={pc} tablet={tablet} sp={sp} />;
};

export default ResponsiveBreak;
