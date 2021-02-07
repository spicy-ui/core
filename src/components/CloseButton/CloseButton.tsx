import * as React from 'react';
import { HiX } from 'react-icons/hi';
import { IconButton, IconButtonProps } from '../Button';

export interface CloseButtonProps extends IconButtonProps {}

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { sx, ...rest } = props;

  return (
    <IconButton
      ref={ref}
      icon={<HiX />}
      variant="ghost"
      color="blackAlpha"
      sx={{ top: 2, right: 2, pos: 'absolute', ...sx }}
      {...rest}
    />
  );
});

CloseButton.displayName = 'CloseButton';
