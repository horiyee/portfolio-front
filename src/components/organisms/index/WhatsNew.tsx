import React from 'react';
import { useRecoilValue } from 'recoil';
import { whatsNewState } from '../../../recoil/selectors/whatsNew';
import IndexWhatsNewCard from '../../molecules/index/WhatsNewCard';
import Section from '../../molecules/Section';

const IndexWhatsNew: React.VFC = () => {
  const whatsNew = useRecoilValue(whatsNewState);

  return (
    <Section enHeading="What's New" jpHeading="新着情報" id="whatsnew">
      {whatsNew.map((whatsNewItem, index) => (
        <IndexWhatsNewCard whatsNew={whatsNewItem} key={index} />
      ))}
    </Section>
  );
};

export default IndexWhatsNew;
