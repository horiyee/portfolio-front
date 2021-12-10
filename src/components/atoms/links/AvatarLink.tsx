import React from 'react';
import styled from 'styled-components';
import { hover } from '../../../styles/mixins';
import { classes } from '../../../utils/classes';
import NextImage from '../NextImage';
import NextLink from '../NextLink';
import StaticImage from '../StaticImage';

type Props = {
  href: string;
  avatarImageSrc: string | StaticImageData;
  avatarImageAlt: string;
  className?: string;
  width?: number;
  height?: number;
};

const StyledNextLink = styled(NextLink)`
  opacity: 0.9;
  ${hover(`
    opacity: 1;
  `)}
`;

const AvatarLink: React.VFC<Props> = ({
  href,
  avatarImageSrc,
  avatarImageAlt,
  className,
  width,
  height,
}) => {
  return (
    <StyledNextLink href={href} className={classes(className)}>
      {typeof avatarImageSrc === `string` ? (
        <NextImage
          src={avatarImageSrc}
          alt={avatarImageAlt}
          width={width}
          height={height}
        />
      ) : (
        <StaticImage
          src={avatarImageSrc}
          alt={avatarImageAlt}
          width={width}
          height={height}
        />
      )}
    </StyledNextLink>
  );
};

export default AvatarLink;
