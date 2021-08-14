import React from 'react';
import styled from 'styled-components';
import { classes } from '../../utils/classes';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Root = styled.p`
  line-height: 1.8;
`;

const Paragraph: React.VFC<Props> = ({ children, className }) => {
  return <Root className={classes(className)}>{children}</Root>;
};

export default Paragraph;
