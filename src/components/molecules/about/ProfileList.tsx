import React from 'react';
import styled from 'styled-components';
import { profileListItems } from '../../../contents/aboutPage';
import { fontSize } from '../../../styles/mixins';

const Root = styled.ul`
  display: inline-block;
  width: 100%;
  padding: 32px 0 0 32px;
`;

const ProfileListItem = styled.li`
  ${fontSize(18)};
  font-weight: 500;
`;

const ProfileListValue = styled.p`
  font-weight: 400;
  margin: 16px 0 32px 0;
`;

const AboutProfileList: React.VFC = () => {
  return (
    <Root>
      {profileListItems.map((item, index) => (
        <ProfileListItem key={index}>
          {item.key}
          <ProfileListValue>{item.value}</ProfileListValue>
        </ProfileListItem>
      ))}
    </Root>
  );
};

export default AboutProfileList;
