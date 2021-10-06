import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import { paths } from '../../../config/paths';
import { fontSize, hoverWithTransition } from '../../../styles/mixins';
import { colors, fontFamilies } from '../../../styles/variables';
import NextLink from '../NextLink';

type Props = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

type RootProps = {
  isActive: boolean;
};
const Root = styled(NextLink)<RootProps>`
  display: inline-block;

  margin: 4px 0;
  padding: 2px 0 2px 20px;

  border-left: 2px solid
    ${props => (props.isActive ? colors.darkBlue : colors.white)};

  font-family: ${fontFamilies.enFont};
  text-transform: uppercase;
  ${fontSize(20)};
  font-weight: 300;

  ${hoverWithTransition(`color: ${colors.defaultBlue};`)};
`;

const PageNavigation: React.VFC<Props> = ({ href, children, className }) => {
  const router = useRouter();
  const { pathname } = router;

  const isIndexLink = href === paths.index;
  const isActive = isIndexLink ? pathname === href : pathname.includes(href);

  return (
    <Root href={href} className={classes(className)} isActive={isActive}>
      {children}
    </Root>
  );
};

export default PageNavigation;
