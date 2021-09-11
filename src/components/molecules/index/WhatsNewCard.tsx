import React from 'react';
import styled from 'styled-components';
import { fontSize, hover, mqSp } from '../../../styles/mixins';
import { colors, fontFamilies } from '../../../styles/variables';
import { WhatsNew } from '../../../types/whatsNew';
import ArrowForwardIcon from '../../atoms/icons/ArrowForwardIcon';
import Icon from '../../atoms/icons/Icon';
import NextImage from '../../atoms/NextImage';
import NextLink from '../../atoms/NextLink';
import Time from '../../atoms/Time';

type Props = {
  whatsNew: WhatsNew;
};

const Root = styled.article`
  display: inline-block;
  width: 100%;

  padding: 32px;
  margin: 24px 0;

  border-radius: 28px;

  overflow: hidden;

  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 24px;
`;

const StyledTime = styled(Time)`
  ${fontSize(18)};
  font-family: ${fontFamilies.enFont};
`;

const CategoryName = styled.span`
  font-weight: 300;

  padding: 4px 16px;

  border: 1px solid ${colors.borderBlack};
  border-radius: 24px;
`;

const Main = styled.main`
  display: flex;
  ${mqSp(`flex-direction: column;`)};
  align-items: center;
  width: 100%;
`;

const StyledNextImage = styled(NextImage)`
  width: 192px;
  margin-right: 32px;
  ${mqSp(`
    width: 100%;
    margin: 0;
  `)};
  padding-bottom: 24px;
`;

type ContentProps = {
  fullWidth?: boolean;
};
const Content = styled.p<ContentProps>`
  width: ${props => (props.fullWidth ? '100%' : ' calc(100% - 224px)')};
  ${mqSp(`
    width: 100%;
  `)};
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  padding-top: 24px;
`;

const StyledLink = styled(NextLink)`
  display: flex;
  align-items: center;
  color: ${colors.defaultBlue};
  fill: ${colors.defaultBlue};

  opacity: 0.9;
  ${hover(`opacity: 1;`)};
`;

const StyledIcon = styled(Icon)`
  margin-right: 4px;
`;

const IndexWhatsNewCard: React.VFC<Props> = ({ whatsNew }) => {
  return (
    <Root>
      <Header>
        <StyledTime
          datetime={whatsNew.publishedAt}
          seperateWithPeriod
          dateOnly
        />
        <CategoryName>{whatsNew.categoryName}</CategoryName>
      </Header>

      <Main>
        {whatsNew.thumbnailUrl ? (
          <StyledNextImage
            src={whatsNew.thumbnailUrl}
            alt={`新着情報「${whatsNew.content}」のサムネイル`}
            width={1200}
            height={630}
          />
        ) : null}
        <Content fullWidth={whatsNew.thumbnailUrl === null}>
          {whatsNew.content}
        </Content>
      </Main>

      {whatsNew.url ? (
        <Footer>
          <StyledLink href={whatsNew.url}>
            <StyledIcon icon={<ArrowForwardIcon />} />
            {whatsNew.url.includes('http') ? 'リンク先を見る' : '記事を見る'}
          </StyledLink>
        </Footer>
      ) : null}
    </Root>
  );
};

export default IndexWhatsNewCard;
