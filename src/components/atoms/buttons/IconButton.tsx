import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import Icon from '../icons/Icon';

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

const StyledIcon = styled(Icon)`
  width: 28px;
  height: 28px;
`;

const IconButton: React.VFC<Props> = ({ icon, onClick, className }) => {
  return (
    <Root className={classes(className)} onClick={() => onClick()}>
      <StyledIcon icon={icon} />
    </Root>
  );
};

export default IconButton;
