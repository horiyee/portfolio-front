import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';

type Props = {
  icon: React.ReactNode;
  className?: string;
};

const Root = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
`;

const Icon: React.VFC<Props> = ({ icon, className }) => {
  return <Root className={classes(className)}>{icon}</Root>;
};

export default Icon;
