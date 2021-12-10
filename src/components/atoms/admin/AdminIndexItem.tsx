import React from 'react';
import styled from 'styled-components';
import { mqSp } from '../../../styles/mixins';
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
  width: calc(50% - 32px);
  ${mqSp(`width: 100%;`)};
  height: 96px;
  ${mqSp(`height: 80px;`)};

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

const Label = styled.span`
  margin: 0 4px;
`;

const AdminIndexItem: React.VFC<Props> = ({
  children,
  href,
  icon,
  className,
}) => {
  return (
    <Root href={href} className={classes(className)}>
      <StyledIcon icon={icon} />
      <Label>{children}</Label>
    </Root>
  );
};

export default AdminIndexItem;
