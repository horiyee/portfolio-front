import React from 'react';
import styled from 'styled-components';
import { classes } from '@horri1520/hori-base-elements/lib/utils/classes';
import { useNavigatorUtilities } from '../../../hooks/navigator';
import { hoverWithTransition } from '../../../styles/mixins';
import { colors } from '../../../styles/variables';
import { WebShareData } from '../../../types';
import Icon from '../icons/Icon';
import ShareIcon from '../icons/ShareIcon';
import IconButton from './IconButton';

type Props = {
  webShareData: WebShareData;
  className?: string;
};

const Root = styled(IconButton)`
  fill: ${colors.buttonGray};
  ${hoverWithTransition(`
    fill: ${colors.defaultBlue};
  `)};
`;

const WebShareButton: React.VFC<Props> = ({ webShareData, className }) => {
  const navigatorUtilities = useNavigatorUtilities();

  return (
    <Root
      className={classes(className)}
      icon={<ShareIcon />}
      onClick={() => navigatorUtilities.callWebShareApi(webShareData)}
    />
  );
};

export default WebShareButton;
