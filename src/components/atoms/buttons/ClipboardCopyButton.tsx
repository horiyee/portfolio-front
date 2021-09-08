import React from 'react';
import styled from 'styled-components';
import { useNavigatorUtilities } from '../../../hooks/navigator';
import { hoverWithTransition } from '../../../styles/mixins';
import { colors } from '../../../styles/variables';
import { classes } from '../../../utils/classes';
import Icon from '../icons/Icon';
import LinkIcon from '../icons/LinkIcon';
import IconButton from './IconButton';

type Props = {
  data: string;
  className?: string;
};

const Root = styled(IconButton)`
  fill: ${colors.buttonGray};
  ${hoverWithTransition(`
    fill: ${colors.defaultGreen};
  `)};
`;

const ClipboardCopyButton: React.VFC<Props> = ({ data, className }) => {
  const navigatorUtilities = useNavigatorUtilities();

  return (
    <Root
      className={classes(className)}
      icon={<LinkIcon />}
      onClick={() => navigatorUtilities.copyStringToClipboard(data)}
    />
  );
};

export default ClipboardCopyButton;
