import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { Box } from '../Box';

export interface KbdProps extends SxProps {
  children?: React.ReactNode;
  as?: string | React.ComponentType<any>;
}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>((props, ref) => {
  const { as, sx, children, ...rest } = props;

  const styles = useComponentStyles('Kbd', props);

  return (
    <Box as={as ?? 'kbd'} ref={ref} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Kbd.displayName = 'Kbd';
