import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import InnerHTMLStyler from '../../atoms/InnerHTMLStyler';

type Props = {
  postBody: string;
  className?: string;
};

const Root = styled.main`
  display: inline-block;
  width: 100%;
`;

const BlogPostDetailBody: React.VFC<Props> = ({ postBody, className }) => {
  return (
    <InnerHTMLStyler className={classes(className)}>
      <Root dangerouslySetInnerHTML={{ __html: postBody }} />
    </InnerHTMLStyler>
  );
};

export default BlogPostDetailBody;
