import React from 'react';
import styled from 'styled-components';
import { escapedEntities } from '../../../contents';
import {
  elementaryAlbumImages,
  highAlbumImages,
  juniorHighAlbumImages,
  roninAlbumImages,
  universityAlbumImages,
} from '../../../contents/aboutPage';
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

          <StyledPhotoAlbum albumImages={elementaryAlbumImages} />

          <Description>
            小学生低学年の頃、父親からクリスマスプレゼントとしてノートパソコンをもらったことを機に、コンピューターの世界にのめり込んでいく。
            <br />
            最初はインターネットを使ってみたり、Windows
            ムービーメーカー(懐かしい)を触ってみたりという程度だったが、徐々にOSの入れ替えやハードウェアの換装など、低レイヤーな領域に興味を持つようになった。
          </Description>
        </HistoryListItem>

        <HistoryListItem>
          <Period useEnFont>2012 - 2014</Period>

          <StyledPhotoAlbum albumImages={juniorHighAlbumImages} />

          <Description>
            中学生になったころ、普通のWindows PCにMac OS Xをインストールする
            &quot;Hackintosh&quot;
            というものに手を出していた。（技術的な好奇心というよりは、単純にお金がなくMacintoshが買えなかったためである。）
            <br />
            P2Pファイル共有やMac OSのドライバ &quot;Kext&quot;
            など、初めて触れたものも多かった。
          </Description>
        </HistoryListItem>

        <HistoryListItem>
          <Period useEnFont>2015 - 2017</Period>

          <StyledPhotoAlbum albumImages={highAlbumImages} />

          <Description>
            高校生になって、興味がモバイル端末のOSやハードウェアにシフトしていた。さすがにスマホのハードウェア換装はできないが、OS(ROM)の入れ替えは可能だったため、root化→ブートローダーアンロック→ROM焼きという手順を踏んでAndroid端末のカスタムを行っていた。
            <br />
            この頃、今でいうSIMフリー端末は皆無で、キャリアから販売されたスマホを白ロムとして購入するしかなく、余計なアプリが大量にプリインストールされていた。さらに、端末のスペックがまだまだ低かったので、通常は不可能なカスタマイズを施したりプリインアプリを消したりするのにROM焼きは非常に有効な方法だった。
          </Description>
        </HistoryListItem>

        <HistoryListItem>
          <Period useEnFont>2018</Period>

          <StyledPhotoAlbum albumImages={roninAlbumImages} />

          <Description>
            浪人していたため、人生で唯一あまりパソコンに触っていない1年間であったが、ちょくちょくパソコンの分解やOSの入れ替えなどをしていた。
          </Description>
        </HistoryListItem>

        <HistoryListItem>
          <Period useEnFont>2019 -</Period>

          <StyledPhotoAlbum albumImages={universityAlbumImages} />

          <Description>
            無事、大学生になる。1年前期で履修した「プログラミング演習」という授業でPythonを学んだことで、プログラミングの面白さに気づく。
            <br />
            もともと趣味のパソコン関係を仕事にできればいいなと思っていたため、実際に利用されているシステムの開発に携わることのできるインターンを開始。
            <br />
            この頃はWeb開発だけでなく、ハードウェア周りや機械学習など様々な分野に触れていた。
          </Description>
        </HistoryListItem>
      </HistoryList>
    </Section>
  );
};

export default AboutHistory;
