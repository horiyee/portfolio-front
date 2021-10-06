import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';

type ObjectFit = 'contain' | 'cover';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  objectFit?: ObjectFit;
  className?: string;
};

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NextImage: React.VFC<Props> = ({
  src,
  alt,
  width,
  height,
  objectFit,
  className,
}) => {
  return (
    <Root className={classes(className)}>
      {objectFit ? (
        <Image src={src} alt={alt} layout="fill" objectFit={objectFit} />
      ) : (
        <Image src={src} alt={alt} width={width} height={height} />
      )}
    </Root>
  );
};

export default NextImage;
