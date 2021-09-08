import React from 'react';
import styled from 'styled-components';
import { snsInfo } from '../../../contents/aboutPage';
import { fontSize, mqSp } from '../../../styles/mixins';
import { fontFamilies } from '../../../styles/variables';
import AvatarLink from '../../atoms/links/AvatarLink';
import ResponsiveBreak from '../../atoms/ResponsiveBreak';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 32px 0;

  ${mqSp(`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

const Name = styled.h2`
  ${fontSize(28)};
  font-weight: 300;
`;

const EnName = styled.span`
  font-family: ${fontFamilies.enFont};
  ${fontSize(24)};
  margin-left: 16px;
`;

const SnsLinksWrapper = styled.aside`
  display: flex;

  ${mqSp(`
    width: 100%;
    justify-content: space-between;

    padding: 32px 16px;
  `)}
`;

const StyledAvatarLink = styled(AvatarLink)`
  width: 32px;
  height: 32px;

  margin: 0 8px;

  ${mqSp(`
    margin: 0;
  `)}
`;

const AboutProfileHeader: React.VFC = () => {
  return (
    <Root>
      <Name>
        堀内 凱登
        <ResponsiveBreak sp />
        <EnName>/ Kaito Horiuchi</EnName>
      </Name>

      <SnsLinksWrapper>
        {Object.keys(snsInfo).map((key, index) => {
          const sns = snsInfo[key];

          return (
            <StyledAvatarLink
              href={sns.url}
              avatarImageSrc={sns.logo}
              avatarImageAlt={`${sns.name}のアイコン`}
              key={index}
            />
          );
        })}
      </SnsLinksWrapper>
    </Root>
  );
};

export default AboutProfileHeader;
