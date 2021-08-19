export type CmsPost = {
  id: string;
  title: string;
  body: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  category: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
