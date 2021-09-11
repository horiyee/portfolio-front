import React from 'react';
import styled from 'styled-components';
import { paths } from '../../../config/paths';
import { fontSize } from '../../../styles/mixins';
import { colors, underlinedBlueLinkStyle } from '../../../styles/variables';
import NextLink from '../../atoms/NextLink';
import Paragraph from '../../atoms/Paragraph';
import SecondHeading from '../../atoms/SecondHeading';
import Section from '../../molecules/Section';

const CareerList = styled.ul`
  display: inline-block;
  width: 100%;
  list-style-type: none;
`;

const CareerListItem = styled.li`
  padding: 12px 0;
`;

const Period = styled(SecondHeading)`
  ${fontSize(24)};
  font-weight: 400;
`;

const InformationWrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding: 24px 0px 24px 12px;
`;

const Organization = styled.h3`
  font-weight: 500;
  line-height: 2;
`;

const Role = styled.h4`
  line-height: 1.6;
`;

const Description = styled(Paragraph)`
  padding: 16px 0;
`;

const Link = styled(NextLink)`
  ${underlinedBlueLinkStyle};
`;

const AboutCareer: React.VFC = () => {
  return (
    <Section enHeading="Career" jpHeading="経歴" id="career">
      <CareerList>
        <CareerListItem>
          <Period useEnFont>2019.4</Period>

          <InformationWrapper>
            <Organization>九州大学 経済学部 経済工学科 入学</Organization>
          </InformationWrapper>
        </CareerListItem>

        <CareerListItem>
          <Period useEnFont>2019.10 - 2020.10</Period>

          <InformationWrapper>
            <Organization>株式会社クアンド</Organization>
            <Role>エンジニア（長期インターン）</Role>

            <Description>
              Vue.js, DjangoでのFA(Factory
              Automation)Webシステム開発、TensorFlow,
              Kerasでの同システム向けCNNモデル開発、React.jsでの自社プロダクト開発、Gatsby.jsでの自社HP・LP開発に従事。
              <br />
              ほかにも、RevPiなどを用いたFAシステムのハードウェア面にも携わっていた。
            </Description>
          </InformationWrapper>
        </CareerListItem>

        <CareerListItem>
          <Period useEnFont>2020.11 - 2021.1</Period>

          <InformationWrapper>
            <Organization>株式会社Regnio</Organization>
            <Role>エンジニア（長期インターン）</Role>

            <Description>
              Gatsby.jsでの自社HP開発やWebViewを利用したモバイルアプリの開発、Raspberry
              Piクラスタやk3sを用いたFAシステムインフラ構築などに従事。
            </Description>
          </InformationWrapper>
        </CareerListItem>

        <CareerListItem>
          <Period useEnFont>2021.2 - now</Period>

          <InformationWrapper>
            <Organization>note株式会社</Organization>
            <Role>
              カイゼン・web1チーム
              <br />
              エンジニア（長期インターン）
            </Role>

            <Description>
              Nuxt.js, Ruby on
              Railsを用いて、noteのフロントエンド・サーバサイド開発に従事。
              <br />
              ほかにも、Next.js,
              Svelteを用いてフロントエンドApp分割などにも携わっている。
            </Description>
          </InformationWrapper>
        </CareerListItem>

        <CareerListItem>
          <Period useEnFont>2021.3.27 - 2021.3.28</Period>

          <InformationWrapper>
            <Organization>株式会社サイバーエージェント</Organization>
            <Role>
              Webフロントエンド
              <br />
              2daysハッカソン型インターン 3位入賞
            </Role>

            <Description>
              用意されたAPIを使い、2日間でECサイトを開発するハッカソン形式のインターン。
              <br />
              詳しくは
              <Link href={`${paths.blog.posts}/311ze4r8ztg3`}>ブログ記事</Link>
              を参照。
            </Description>
          </InformationWrapper>
        </CareerListItem>

        <CareerListItem>
          <Period useEnFont>2021.8.9 - 2021.8.27</Period>

          <InformationWrapper>
            <Organization>株式会社VOYAGE GROUP</Organization>
            <Role>
              Treasure 2021
              <br />
              グランプリ・UI/UX賞受賞
            </Role>

            <Description>
              詳しくは
              <Link href={`${paths.blog.posts}/lsk8k8gpz`}>ブログ記事</Link>
              を参照。
            </Description>
          </InformationWrapper>
        </CareerListItem>

        <CareerListItem>
          <Period useEnFont>2021.9.8</Period>

          <InformationWrapper>
            <Organization>クックパッド株式会社</Organization>
            <Role>
              Cookpad Summer Internship 2021
              <br />
              裏Techコース(1day)
            </Role>

            <Description>
              Next.js, Ruby on
              Railsで構築されたアプリケーションを題材に、GraphQLを用いてAPIを開発するインターン。
            </Description>
          </InformationWrapper>
        </CareerListItem>
      </CareerList>
    </Section>
  );
};

export default AboutCareer;
