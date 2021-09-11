import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { classes } from '../../utils/classes';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Root = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  border-radius: 50%;
  background: ${colors.defaultBlue};

  fill: ${colors.white};
`;

const Decoration: React.VFC<Props> = ({ children, className }) => {
  return <Root className={classes(className)}>{children}</Root>;
};

export default Decoration;
