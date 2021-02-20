import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { AsProp, LiteralUnion } from '../../types';
import { Box } from '../Box';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends AsProp, SxProp {
  /** Orientation of the divider. */
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
