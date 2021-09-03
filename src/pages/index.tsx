import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import IndexTemplate from '../components/templates/IndexTemplate';
import { fetchCmsPostsApiClient } from '../api/clients/cmsPosts';
import { CmsPost } from '../types/cmsPost';
import { useSetCmsPosts } from '../hooks/cmsPosts';
import { Announcement } from '../types/announcement';
import { useSetAnnouncements } from '../hooks/announcements';
import { fetchQiitaPostsApiClient } from '../api/clients/qiitaPosts';
import { QiitaPost } from '../types/qiitaPost';
import { useSetQiitaPosts } from '../hooks/qiitaPosts';
import { fetchAnnouncementsApiClient } from '../api/clients/announcements';

type StaticProps = {
  cmsPosts: CmsPost[];
  qiitaPosts: QiitaPost[];
  announcements: Announcement[];
};

const IndexPage: NextPage<StaticProps> = ({
  cmsPosts,
  qiitaPosts,
  announcements,
}) => {
  if (cmsPosts.length !== 0) {
    useSetCmsPosts(cmsPosts);
  }
  if (qiitaPosts.length !== 0) {
    useSetQiitaPosts(qiitaPosts);
  }
  if (announcements.length !== 0) {
    useSetAnnouncements(announcements);
  }

  return <IndexTemplate />;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const cmsPostsRes = await fetchCmsPostsApiClient();
    const qiitaPostsRes = await fetchQiitaPostsApiClient();
    const announcementsRes = await fetchAnnouncementsApiClient();
    const props: StaticProps = {
      cmsPosts: cmsPostsRes.contents,
      qiitaPosts: qiitaPostsRes.contents,
      announcements: announcementsRes.contents,
    };

    return { props };
  } catch (e) {
    console.error(e);
    const props: StaticProps = {
      cmsPosts: [],
      qiitaPosts: [],
      announcements: [],
    };

    return { props };
  }
};

export default IndexPage;
