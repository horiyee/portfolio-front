import React from 'react';
import NextImage from '../../atoms/NextImage';
import StaticImage from '../../atoms/StaticImage';
import Section from '../../molecules/Section';
import childhoodImage from '../../../../public/images/childhood.jpg';
import AboutProfileHeader from '../../molecules/about/ProfileHeader';
import AboutProfileList from '../../molecules/about/ProfileList';

const AboutProfile: React.VFC = () => {
  return (
    <Section enHeading="Profile" jpHeading="自己紹介" id="profile">
      <StaticImage src={childhoodImage} alt="子供時代の写真" />

      <AboutProfileHeader />
      <AboutProfileList />
    </Section>
  );
};

export default AboutProfile;
