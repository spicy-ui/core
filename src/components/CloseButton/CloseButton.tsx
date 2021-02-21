import * as React from 'react';
import { HiX } from 'react-icons/hi';
import { useComponentStyles } from '../../system';
import { IconButton, IconButtonProps } from '../Button';

export interface CloseButtonProps extends Omit<IconButtonProps, 'children'> {
  children?: never;
  /** Icon shown inside the close button. */
  icon?: React.ReactElement;
}

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { sx, icon = <HiX />, ...rest } = props;

  const styles = useComponentStyles('CloseButton', props);

  return <IconButton ref={ref} icon={icon} sx={styles} {...rest} />;
});

CloseButton.defaultProps = {
  color: 'blackAlpha',
  variant: 'ghost',
};

CloseButton.displayName = 'CloseButton';
