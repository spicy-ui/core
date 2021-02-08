import * as React from 'react';
import { HiX } from 'react-icons/hi';
import { IconButton, IconButtonProps } from '../Button';

export interface CloseButtonProps extends IconButtonProps {}

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => (
  <IconButton ref={ref} icon={<HiX />} variant="ghost" color="blackAlpha" {...props} />
));

CloseButton.displayName = 'CloseButton';
