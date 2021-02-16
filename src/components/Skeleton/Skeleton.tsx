import * as React from 'react';
import { useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box, BoxProps } from '../Box';

export type SkeletonVariants = 'text' | 'circle' | 'square';

export interface SkeletonProps extends BoxProps {
  children?: React.ReactNode;
  as?: string | React.ComponentType<any>;
  /** Variant style of the skeleton. */
  variant?: LiteralUnion<SkeletonVariants>;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { sx, as, children, ...rest } = props;

  const styles = useComponentStyles('Skeleton', props);

  return (
    <Box ref={ref} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Skeleton.defaultProps = {
  variant: 'text',
};

Skeleton.displayName = 'Skeleton';
