import React from 'react';
import styled from 'styled-components';
import { useNavigatorUtilities } from '../../../hooks/navigator';
import { WebShareData } from '../../../types';
import IconButton from '../../atoms/buttons/IconButton';
import Icon from '../../atoms/icons/Icon';
import LinkIcon from '../../atoms/icons/LinkIcon';
import ShareIcon from '../../atoms/icons/ShareIcon';

type Props = {
  webShareData: WebShareData;
};

const Root = styled.div`
  display: flex;
`;

const ShareButton = styled(IconButton)``;

const ClipboardCopyButton = styled(IconButton)``;

const ShareButtons: React.VFC<Props> = ({ webShareData }) => {
  const navigatorUtilities = useNavigatorUtilities();

  return (
    <Root>
      <ClipboardCopyButton
        onClick={() =>
          navigatorUtilities.copyStringToClipboard(webShareData.url)
        }
        icon={<Icon icon={<LinkIcon />} />}
      />
      <ShareButton
        icon={<Icon icon={<ShareIcon />} />}
        onClick={() => navigatorUtilities.callWebShareApi(webShareData)}
      />
    </Root>
  );
};

export default ShareButtons;
