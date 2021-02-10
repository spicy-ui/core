import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';

export type BadgeColors = ColorScales;

export type BadgeVariants = 'outline' | 'solid' | 'subtle';

export interface BadgeProps extends SxProps {
  children?: React.ReactNode;
  as?: string | React.ComponentType<any>;
  /** Color of the badge. */
  color?: LiteralUnion<BadgeColors>;
  /** Variant of the badge. */
  variant?: LiteralUnion<BadgeVariants>;
}

export const Badge = React.forwardRef<HTMLElement, BadgeProps>((props, ref) => {
  const { children, sx, as, ...rest } = props;

  const styles = useComponentStyles('Badge', props);

  return (
    <Box as={as ?? 'span'} ref={ref} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Badge.defaultProps = {
  color: 'gray',
  variant: 'subtle',
};

Badge.displayName = 'Badge';
