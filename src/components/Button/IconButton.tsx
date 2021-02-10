import * as React from 'react';
import { Button, ButtonProps } from './Button';

export interface IconButtonProps
  extends Omit<ButtonProps, 'iconSpacing' | 'iconBefore' | 'iconAfter' | 'isFullWidth' | 'loadingText'> {
  /** Icon shown inside the button. */
  icon?: React.ReactElement;
  /** If `true`, the button will be rounded. */
  isRound?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { children, sx, icon, isRound, ...rest } = props;

  return (
    <Button ref={ref} sx={{ p: 0, borderRadius: isRound ? 'full' : 'md', ...sx }} {...rest}>
      {icon || children}
    </Button>
  );
});

IconButton.displayName = 'IconButton';
