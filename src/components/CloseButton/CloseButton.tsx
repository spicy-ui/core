import * as React from 'react';
import { HiX } from 'react-icons/hi';
import { IconButton, IconButtonProps } from '../Button';

export interface CloseButtonProps extends IconButtonProps {
  /** Icon shown inside the close button. */
  icon?: React.ReactElement;
}

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { icon = <HiX />, ...rest } = props;

  return <IconButton ref={ref} icon={icon} variant="ghost" color="blackAlpha" {...rest} />;
});

CloseButton.displayName = 'CloseButton';
