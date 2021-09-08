import React from 'react';
import styled from 'styled-components';
import { classes } from '../../../utils/classes';

type Props = {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Root = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 4px;
`;

const IconButton: React.VFC<Props> = ({ icon, onClick, className }) => {
  return (
    <Root className={classes(className)} onClick={() => onClick()}>
      {icon}
    </Root>
  );
};

export default IconButton;
