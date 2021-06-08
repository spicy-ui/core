import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { AsProp, ChildrenProp, HTMLAttributes, LiteralUnion } from '../../types';
import { Box } from '../Box';

export type BadgeColors = ColorScales;

export type BadgeVariants = 'outline' | 'solid' | 'subtle';

export interface BadgeProps extends HTMLAttributes, AsProp, ChildrenProp, SxProp {
  /** Color of the badge. */
  color?: LiteralUnion<BadgeColors>;
  /** Variant of the badge. */
  variant?: LiteralUnion<BadgeVariants>;
}

export const Badge = React.forwardRef<HTMLElement, BadgeProps>((props, ref) => {
  const { as, children, sx, color, variant, ...rest } = props;

  const styles = useComponentStyles('Badge', props);

  return (
    <Box ref={ref} as={as ?? 'span'} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Badge.defaultProps = {
  color: 'gray',
  variant: 'subtle',
};

Badge.displayName = 'Badge';
