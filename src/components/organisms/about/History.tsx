import React from 'react';
import styled from 'styled-components';
import { juniorHighAlbumImages } from '../../../contents/aboutPage';
import { fontSize } from '../../../styles/mixins';
import SecondHeading from '../../atoms/SecondHeading';
import Section from '../../molecules/Section';
import PhotoAlbum from '../PhotoAlbum';

const HistoryList = styled.ul`
  display: inline-block;
  width: 100%;
  list-style-type: none;
`;

const HistoryListItem = styled.li`
  padding: 24px 0;
`;

const Period = styled(SecondHeading)`
  ${fontSize(24)};
  font-weight: 400;
`;

const StyledPhotoAlbum = styled(PhotoAlbum)`
  padding-bottom: 24px;
`;

const Description = styled.p`
  padding: 16px 0;

  font-weight: 400;
  line-height: 1.8;
`;

const AboutHistory: React.VFC = () => {
  return (
    <Section enHeading="History" jpHeading="来歴" id="history">
      <HistoryList>
        <HistoryListItem>
          <Period useEnFont>2000 - 2005</Period>

          <Description>
            2000年1月、香川県高松市にて生まれる。
            <br />
            幼稚園の頃から車やCDラジカセといった機械類に興味が強かった。
          </Description>
        </HistoryListItem>

        <HistoryListItem>
          <Period useEnFont>2006 - 2011</Period>

          <StyledPhotoAlbum albumImages={juniorHighAlbumImages} />

          <Description>
            小学生低学年の頃、父親からクリスマスプレゼントとしてノートパソコンをもらったことを機に、コンピューターの世界にのめり込んでいく。
            <br />
            最初はインターネットを使ってみたり、Windows
            ムービーメーカー(懐かしい)を触ってみたりという程度だったが、徐々にOSの入れ替えやハードウェアの換装など、低レイヤーな領域に興味を持つようになった。
          </Description>
        </HistoryListItem>
      </HistoryList>
    </Section>
  );
};

export default AboutHistory;
