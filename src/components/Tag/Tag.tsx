import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { AsProp, ChildrenProp, HTMLAttributes, LiteralUnion } from '../../types';
import { Box } from '../Box';

export type TagColors = ColorScales;

export type TagSizes = 'sm' | 'md' | 'lg';

export type TagVariants = 'outline' | 'solid' | 'subtle';

export interface TagProps extends Omit<HTMLAttributes, 'label'>, AsProp, ChildrenProp, SxProp {
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
  const { as, children, sx, label, isRound, color, size, variant, ...rest } = props;

  const styles = useComponentStyles('Tag', props);

  return (
    <Box ref={ref} as={as ?? 'span'} sx={styles} {...rest}>
      {label || children}
    </Box>
  );
});

Tag.defaultProps = {
  color: 'gray',
  size: 'md',
  variant: 'subtle',
};

Tag.displayName = 'Tag';
