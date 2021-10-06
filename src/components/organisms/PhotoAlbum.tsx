import React, { useState } from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import { colors } from '../../styles/variables';
import { AlbumImage } from '../../types';
import StaticImage from '../atoms/StaticImage';
import PhotoAlbumHeader from '../molecules/PhotoAlbumHeader';

type Props = {
  albumImages: AlbumImage[];
  className?: string;
};

const Root = styled.div`
  display: inline-block;
  width: 100%;
`;

const StyledPhotoAlbumHeader = styled(PhotoAlbumHeader)`
  padding: 24px 0;
`;

const ImageWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Image = styled(StaticImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 4 / 3;

  border: 1px solid ${colors.borderGray};
`;

const PhotoAlbum: React.VFC<Props> = ({ albumImages, className }) => {
  const [chosenImage, setChosenImage] = useState(albumImages[0]);

  return (
    <Root className={classes(className)}>
      <StyledPhotoAlbumHeader
        albumImages={albumImages}
        chosenImage={chosenImage}
        setChosenImage={setChosenImage}
      />

      <ImageWrapper>
        <Image
          src={chosenImage.src}
          alt={chosenImage.alt}
          objectFit="contain"
        />
      </ImageWrapper>
    </Root>
  );
};

export default PhotoAlbum;
