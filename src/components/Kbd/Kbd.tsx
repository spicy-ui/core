import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { AsProp, ChildrenProp, HTMLAttributes } from '../../types';
import { Box } from '../Box';

export interface KbdProps extends HTMLAttributes, AsProp, ChildrenProp, SxProp {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>((props, ref) => {
  const { as, children, sx, ...rest } = props;

  const styles = useComponentStyles('Kbd', props);

  return (
    <Box ref={ref} as={as ?? 'kbd'} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Kbd.displayName = 'Kbd';
