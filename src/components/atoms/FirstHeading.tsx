import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import { fontSize, mqSp } from '../../styles/mixins';
import { colors, fontFamilies } from '../../styles/variables';
import ResponsiveBreak from './ResponsiveBreak';

type Props = {
  enHeading: string;
  jpHeding: string;
  className?: string;
};

const Root = styled.h1`
  display: inline-block;
  width: 100%;
`;

const Decoration = styled.div`
  display: inline-block;
  width: 32px;
  height: 2px;
  background: ${colors.darkBlue};

  margin: 0 16px 8px 0;
`;

const EnHeading = styled.span`
  font-family: ${fontFamilies.enFont};
  ${fontSize(24)};
  font-weight: 400;
`;

const JpHeading = styled.span`
  margin-left: 12px;
  ${mqSp(`margin-left: 48px;`)}

  ${fontSize(20)};
  font-weight: 300;
`;

const FirstHeading: React.VFC<Props> = ({ enHeading, jpHeding, className }) => {
  return (
    <Root className={classes(className)}>
      <Decoration />
      <EnHeading>{enHeading}</EnHeading>
      <ResponsiveBreak sp />
      <JpHeading>{jpHeding}</JpHeading>
    </Root>
  );
};

export default FirstHeading;
