import * as React from 'react';
import { useComponentStyles } from '../../hooks';
import { SxProp } from '../../system';
import { Box } from '../Box';
import { LiteralUnion } from '../types';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends SxProp {
  orientation?: LiteralUnion<DividerOrientation>;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { sx, orientation, ...rest } = props;

  const styles = useComponentStyles('Divider', props);

  return <Box ref={ref} sx={styles} {...rest} />;
});

Divider.defaultProps = {
  orientation: 'horizontal',
};

Divider.displayName = 'Divider';
