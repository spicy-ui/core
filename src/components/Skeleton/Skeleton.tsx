import * as React from 'react';
import { useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box, BoxProps } from '../Box';

export type SkeletonVariants = 'text' | 'circle' | 'square';

export interface SkeletonProps extends BoxProps {
  /** Variant style of the skeleton. */
  variant?: LiteralUnion<SkeletonVariants>;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { children, sx, ...rest } = props;

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
