import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';

export type TagColors = ColorScales;

export type TagSizes = 'sm' | 'md' | 'lg';

export type TagVariants = 'outline' | 'solid' | 'subtle';

export interface TagProps extends SxProps {
  children?: React.ReactNode;
  as?: string | React.ComponentType<any>;
  /** Label shown within the tag. */
  label?: React.ReactNode;
  /** If `true`, the tag will be rounded. */
  isRound?: boolean;
  /** Color of the tag. */
  color?: LiteralUnion<TagColors>;
  /** Size of the tag. */
  size?: LiteralUnion<TagSizes>;
  /** Variant of the tag. */
  variant?: LiteralUnion<TagVariants>;
}

export const Tag = React.forwardRef<HTMLElement, TagProps>((props, ref) => {
  const { children, sx, as, isRound, color, size, variant, ...rest } = props;

  const styles = useComponentStyles('Tag', props);

  return (
    <Box as={as ?? 'span'} ref={ref} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Tag.defaultProps = {
  color: 'gray',
  size: 'md',
  variant: 'subtle',
};

Tag.displayName = 'Tag';
