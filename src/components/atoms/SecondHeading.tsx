import React from 'react';
import styled from 'styled-components';
import { fontFamilies } from '../../styles/variables';
import { classes } from '../../utils/classes';

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
