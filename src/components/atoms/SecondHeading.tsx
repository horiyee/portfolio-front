import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import { fontFamilies } from '../../styles/variables';

type Props = {
  children: React.ReactNode;
  className?: string;
  useEnFont?: boolean;
};

type RootProps = {
  useEnFont?: boolean;
};
const Root = styled.h2<RootProps>`
  font-family: ${props =>
    props.useEnFont ? fontFamilies.enFont : fontFamilies.jpFont};
`;

const SecondHeading: React.VFC<Props> = ({
  children,
  className,
  useEnFont,
}) => {
  return (
    <Root className={classes(className)} useEnFont={useEnFont}>
      {children}
    </Root>
  );
};

export default SecondHeading;
