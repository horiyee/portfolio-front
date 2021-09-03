import atCoderLogoImage from '../../public/icons/atcoder-icon.png';
import gitHubLogoImage from '../../public/icons/github-icon.png';
import noteLogoImage from '../../public/icons/note-icon.png';
import qiitaLogoImage from '../../public/icons/qiita-icon.png';
import twitterLogoImage from '../../public/icons/twitter-icon.svg';
import { KeyValueData } from '../types';
import { schoolGrade } from '.';

type Sns = {
  name: string;
  logo: StaticImageData;
  url: string;
  id: string;
};

export const snsInfo: { [s: string]: Sns } = {
  atCoder: {
    name: 'AtCoder',
    logo: atCoderLogoImage,
    url: 'https://atcoder.jp/users/horri1520',
    id: 'horri1520',
  },
  github: {
    name: 'GitHub',
    logo: gitHubLogoImage,
    url: 'https://github.com/horri1520',
    id: 'horri1520',
  },
  note: {
    name: 'note',
    logo: noteLogoImage,
    url: 'https://note.com/horri1520',
    id: 'horri1520',
  },
  qiita: {
    name: 'Qiita',
    logo: qiitaLogoImage,
    url: 'https://qiita.com/horri1520',
    id: 'horri1520',
  },
  twitter: {
    name: 'Twitter',
    logo: twitterLogoImage,
    url: 'https://twitter.com/horri1520',
    id: 'horri1520',
  },
};

export const profileListItems: KeyValueData[] = [
  {
    key: 'ハンドルネーム',
    value: 'ほり / hori / horri1520',
  },
  {
    key: '出身地',
    value: '香川県',
  },
  {
    key: '居住地',
    value: '福岡県',
  },
  {
    key: '学年',
    value: `大学${schoolGrade}年（23卒）`,
  },
];
