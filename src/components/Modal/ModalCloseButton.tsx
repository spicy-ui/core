import * as React from 'react';
import { useComponentStyles } from '../../system';
import { CloseButton, CloseButtonProps } from '../CloseButton';

export interface ModalCloseButtonProps extends CloseButtonProps {}

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = (props) => {
  const { sx, ...rest } = props;

  const styles = useComponentStyles('ModalCloseButton', props);

  return <CloseButton sx={styles} {...rest} />;
};

ModalCloseButton.displayName = 'ModalCloseButton';
