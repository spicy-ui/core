import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { AsProp, ChildrenProp, LiteralUnion } from '../../types';
import { Box } from '../Box';

export type CodeColors = ColorScales;

export type CodeVariants = 'outline' | 'solid' | 'subtle';

export interface CodeProps extends AsProp, ChildrenProp, SxProp {
  /** Color of the code element. */
  color?: LiteralUnion<CodeColors>;
  /** Variant of the code element. */
  variant?: LiteralUnion<CodeVariants>;
}

export const Code = React.forwardRef<HTMLElement, CodeProps>((props, ref) => {
  const { as, children, sx, color, variant, ...rest } = props;

  const styles = useComponentStyles('Code', props);

  return (
    <Box ref={ref} as={as ?? 'code'} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Code.defaultProps = {
  color: 'gray',
  variant: 'subtle',
};

Code.displayName = 'Code';
