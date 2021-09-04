import React, { useState } from 'react';
import styled from 'styled-components';
import { AlbumImage } from '../../types';
import { classes } from '../../utils/classes';
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
        <StaticImage
          src={chosenImage.src}
          alt={chosenImage.alt}
          objectFit="contain"
        />
      </ImageWrapper>
    </Root>
  );
};

export default PhotoAlbum;
