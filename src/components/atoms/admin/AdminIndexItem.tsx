import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import { classes } from '../../../utils/classes';
import Icon from '../icons/Icon';
import NextLink from '../NextLink';

type Props = {
  children?: React.ReactNode;
  href: string;
  icon: React.ReactNode;
  className?: string;
};

const Root = styled(NextLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 96px;

  color: ${colors.defaultBlue};
  fill: ${colors.defaultBlue};
  border: 2px solid ${colors.defaultBlue};
  border-radius: 8px;

  &:hover {
    color: ${colors.white};
    background: ${colors.defaultBlue};
    fill: ${colors.white};
  }
`;

const StyledIcon = styled(Icon)`
  width: 36px;
  height: 36px;
`;

type LabelProps = {
  hasIcon: boolean;
};
const Label = styled.span<LabelProps>`
  margin-left: ${props => (props.hasIcon ? '4px' : '0')};
`;

const AdminIndexItem: React.VFC<Props> = ({
  children,
  href,
  icon,
  className,
}) => {
  const hasIcon = Boolean(icon);

  return (
    <Root href={href} className={classes(className)}>
      <StyledIcon icon={icon} />
      <Label hasIcon={hasIcon}>{children}</Label>
    </Root>
  );
};

export default AdminIndexItem;
