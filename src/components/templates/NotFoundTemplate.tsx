import React from 'react';
import styled from 'styled-components';
import { paths } from '../../config/paths';
import { hover } from '../../styles/mixins';
import { colors } from '../../styles/variables';
import { MetaData } from '../../types';
import Decoration from '../atoms/Decoration';
import ArrowBackIcon from '../atoms/icons/ArrowBackIcon';
import Icon from '../atoms/icons/Icon';
import NextLink from '../atoms/NextLink';
import Section from '../molecules/Section';
import PortfolioTemplate from './common/PortfolioTemplate';

const IndexLinkWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const IndexLink = styled(NextLink)`
  display: flex;
  align-items: center;

  padding-top: 32px;
  color: ${colors.defaultBlue};

  opacity: 0.9;
  ${hover(`opacity: 1;`)};
`;

const StyledDecoration = styled(Decoration)`
  margin-right: 8px;

  width: 42px;
  height: 42px;
`;

const NotFoundTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: '404 Not found.',
    pagePath: paths.notFound,
    noIndex: true,
  };

  return (
    <PortfolioTemplate metaData={metaData}>
      <Section
        enHeading="404 Not found."
        jpHeading="ページが見つかりません"
        id="404"
      >
        <IndexLinkWrapper>
          <IndexLink href={paths.index}>
            <StyledDecoration>
              <Icon icon={<ArrowBackIcon />} />
            </StyledDecoration>
            トップに戻る
          </IndexLink>
        </IndexLinkWrapper>
      </Section>
    </PortfolioTemplate>
  );
};

export default NotFoundTemplate;
