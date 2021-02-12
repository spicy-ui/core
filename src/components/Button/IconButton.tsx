import * as React from 'react';
import { useComponentStyles } from '../../system';
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

  const styles = useComponentStyles('IconButton', props);

  return (
    <Button ref={ref} sx={styles} {...rest}>
      {icon || children}
    </Button>
  );
});

IconButton.displayName = 'IconButton';
