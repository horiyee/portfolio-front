import React from 'react';
import styled from 'styled-components';
import { snsInfo } from '../../../contents/aboutPage';
import { fontSize } from '../../../styles/mixins';
import { fontFamilies } from '../../../styles/variables';
import AvatarLink from '../../atoms/links/AvatarLink';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 32px 0;
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
`;

const StyledAvatarLink = styled(AvatarLink)`
  width: 32px;
  height: 32px;

  margin: 0 8px;
`;

const AboutProfileHeader: React.VFC = () => {
  return (
    <Root>
      <Name>
        堀内 凱登
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
