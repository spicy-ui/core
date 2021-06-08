import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { AsProp, ChildrenProp, HTMLAttributes, LiteralUnion } from '../../types';
import { Box } from '../Box';

export type TabColors = ColorScales;

export type TabVariants = 'line' | 'enclosed' | 'pill';

export interface TabsProps extends HTMLAttributes, AsProp, ChildrenProp, SxProp {
  color?: LiteralUnion<TabColors>;
  variant?: LiteralUnion<TabVariants>;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { children, sx, ...rest } = props;

  const styles = useComponentStyles('Tabs', props);

  return (
    <Box ref={ref} role="tablist" sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Tabs.defaultProps = {
  color: 'blue',
  variant: 'line',
};

Tabs.displayName = 'Tabs';
