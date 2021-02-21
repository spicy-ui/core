import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { ChildrenProp, LiteralUnion } from '../../types';
import { Box } from '../Box';

export type AlertColors = ColorScales;

export interface AlertProps extends ChildrenProp, SxProp {
  /** Color of the alert. */
  color?: LiteralUnion<AlertColors>;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { children, sx, color, ...rest } = props;

  const styles = useComponentStyles('Alert', props);

  return (
    <Box ref={ref} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Alert.defaultProps = {
  color: 'gray',
};

Alert.displayName = 'Alert';
