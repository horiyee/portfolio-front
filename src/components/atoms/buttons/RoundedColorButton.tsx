import React from 'react';
import styled from 'styled-components';
import { hover, mqSp } from '../../../styles/mixins';
import { colors } from '../../../styles/variables';
import { classes } from '../../../utils/classes';
import Icon from '../icons/Icon';

type Props = {
  children?: React.ReactNode;
  onClick: (arg: any) => void;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const Root = styled.button`
  display: flex;
  align-items: center;

  border-radius: 24px;

  padding: 8px 16px;

  background: ${props =>
    props.disabled ? colors.disabled : colors.defaultBlue};
  color: ${colors.white};
  fill: ${colors.white};
  opacity: 0.9;
  ${hover(`opacity: 1;`)}

  ${mqSp(`
    width: 100%;
    justify-content: center;
  `)};
`;

type LabelProps = {
  hasIcon: boolean;
};
const Label = styled.span<LabelProps>`
  margin-left: ${props => (props.hasIcon ? '8px' : '0')};
`;

const RoundedColorButton: React.VFC<Props> = ({
  children,
  onClick,
  icon,
  className,
  disabled,
}) => {
  const hasIcon = Boolean(icon);

  return (
    <Root
      className={classes(className)}
      onClick={arg => onClick(arg)}
      disabled={disabled}
    >
      {icon ? <Icon icon={icon} /> : null}
      <Label hasIcon={hasIcon}>{children}</Label>
    </Root>
  );
};

export default RoundedColorButton;
