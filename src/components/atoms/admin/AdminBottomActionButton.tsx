import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import BasicButton from '../buttons/BasicButton';

type ButtonColor = 'blue' | 'red';

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
  color?: ButtonColor;
  icon: React.ReactNode;
};

type RootProps = {
  color: string;
};
const Root = styled(BasicButton)<RootProps>`
  color: ${props => props.color};
  fill: ${props => props.color};
`;

const AdminBottomActionButton: React.VFC<Props> = ({
  onClick,
  children,
  color,
  icon,
}) => {
  return (
    <Root
      onClick={() => onClick()}
      icon={icon}
      color={color === 'red' ? colors.error : colors.defaultBlue}
    >
      {children}
    </Root>
  );
};

export default AdminBottomActionButton;
