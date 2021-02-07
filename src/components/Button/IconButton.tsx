import * as React from 'react';
import { Button, ButtonProps } from './Button';

export interface IconButtonProps
  extends Omit<ButtonProps, 'iconSpacing' | 'iconBefore' | 'iconAfter' | 'isFullWidth' | 'loadingText'> {
  icon?: React.ReactElement;
  isRound?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { sx, children, icon, isRound, ...rest } = props;

  return (
    <Button ref={ref} sx={{ p: 0, borderRadius: isRound ? 'full' : 'md' }} {...rest}>
      {icon || children}
    </Button>
  );
});

IconButton.displayName = 'IconButton';
