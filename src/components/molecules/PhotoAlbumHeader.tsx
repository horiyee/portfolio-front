import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import { hover } from '../../styles/mixins';
import { colors } from '../../styles/variables';
import { AlbumImage } from '../../types';
import StaticImage from '../atoms/StaticImage';

type Props = {
  albumImages: AlbumImage[];
  chosenImage: AlbumImage;
  setChosenImage: (image: AlbumImage) => void;
  className?: string;
};

const Root = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;

type ThumbnailWrapperProps = {
  isChosen?: boolean;
};
const ThumbnailWrapper = styled.button<ThumbnailWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 3.2px solid
    ${props => (props.isChosen ? colors.defaultBlue : colors.borderGray)};
  border-radius: 4px;

  margin-right: 8px;
  padding: 2px;
`;

type ThumbnailProps = {
  isChosen?: boolean;
};
const Thumbnail = styled(StaticImage)<ThumbnailProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;

  opacity: ${props => (props.isChosen ? `1` : `0.9`)};

  ${hover(`opacity: 1;`)};
`;

const PhotoAlbumHeader: React.VFC<Props> = ({
  albumImages,
  chosenImage,
  setChosenImage,
  className,
}) => {
  return (
    <Root className={classes(className)}>
      {albumImages.map((image, index) => {
        const isChosen = image === chosenImage;
        return (
          <ThumbnailWrapper
            key={index}
            onClick={() => setChosenImage(image)}
            isChosen={isChosen}
          >
            <Thumbnail
              src={image.src}
              alt={`${image.alt}のサムネイル`}
              objectFit="cover"
              isChosen={isChosen}
            />
          </ThumbnailWrapper>
        );
      })}
    </Root>
  );
};

export default PhotoAlbumHeader;
