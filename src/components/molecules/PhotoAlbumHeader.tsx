import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { AlbumImage } from '../../types';
import { classes } from '../../utils/classes';
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
    ${props => (props.isChosen ? colors.defaultBlue : colors.white)};
  border-radius: 4px;

  margin-right: 8px;
  padding: 2px;
`;

const Thumbnail = styled(StaticImage)`
  width: 64px;
  height: 64px;
`;

const PhotoAlbumHeader: React.VFC<Props> = ({
  albumImages,
  chosenImage,
  setChosenImage,
  className,
}) => {
  return (
    <Root className={classes(className)}>
      {albumImages.map((image, index) => (
        <ThumbnailWrapper
          key={index}
          onClick={() => setChosenImage(image)}
          isChosen={image === chosenImage}
        >
          <Thumbnail
            src={image.src}
            alt={`${image.alt}のサムネイル`}
            objectFit="cover"
          />
        </ThumbnailWrapper>
      ))}
    </Root>
  );
};

export default PhotoAlbumHeader;
