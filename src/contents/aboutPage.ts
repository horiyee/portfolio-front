import atCoderLogoImage from '../../public/icons/atcoder-icon.png';
import gitHubLogoImage from '../../public/icons/github-icon.png';
import noteLogoImage from '../../public/icons/note-icon.png';
import qiitaLogoImage from '../../public/icons/qiita-icon.png';
import twitterLogoImage from '../../public/icons/twitter-icon.svg';
import fujitsuPcImage from '../../public/images/fujitsu-pc.jpg';
import sataHddImage from '../../public/images/sata-hdd.jpg';
import hackintoshImage from '../../public/images/hackintosh.jpeg';
import xperiaZ1Image from '../../public/images/xperia-z1.jpeg';
import motorolaRazrImage from '../../public/images/motorola-razr.jpeg';
import xperiaImage from '../../public/images/xperia.jpg';
import vmHackintoshImage from '../../public/images/vm-hackintosh.jpg';
import excelMacroImage from '../../public/images/excel-macro.jpg';
import toshibaPcImage from '../../public/images/toshiba-pc.jpg';
import internLabsImage from '../../public/images/intern-labs.jpg';
import { AlbumImage, KeyValueData } from '../types';
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

export const elementaryAlbumImages: AlbumImage[] = [
  { src: fujitsuPcImage, alt: '初めてのPC分解' },
  { src: sataHddImage, alt: '初めてのSerial ATA ハードディスク' },
];

export const juniorHighAlbumImages: AlbumImage[] = [
  {
    src: hackintoshImage,
    alt: 'Hackintosh化によりMac OS Xが動いているWindows PC',
  },
];

export const highAlbumImages: AlbumImage[] = [
  { src: xperiaZ1Image, alt: '海外版Xperia Z1' },
  { src: motorolaRazrImage, alt: 'Motorola RAZR M' },
  {
    src: xperiaImage,
    alt: '初代Xperia',
  },
];

export const roninAlbumImages: AlbumImage[] = [
  { src: vmHackintoshImage, alt: '仮想マシン上で動作するMac OS X' },
  {
    src: excelMacroImage,
    alt: 'Excelで作ったセンター試験傾斜配点算出システム',
  },
  { src: toshibaPcImage, alt: '分解したPC' },
];

export const universityAlbumImages: AlbumImage[] = [
  { src: internLabsImage, alt: '最初のインターン先の仕事風景' },
];
