import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';

export type CodeColors = ColorScales;

export type CodeVariants = 'outline' | 'solid' | 'subtle';

export interface CodeProps extends SxProps {
  children?: React.ReactNode;
  as?: string | React.ComponentType<any>;
  /** Color of the code element. */
  color?: LiteralUnion<CodeColors>;
  /** Variant of the code element. */
  variant?: LiteralUnion<CodeVariants>;
}

export const Code = React.forwardRef<HTMLElement, CodeProps>((props, ref) => {
  const { as, sx, children, ...rest } = props;

  const styles = useComponentStyles('Code', props);

  return (
    <Box as={as ?? 'code'} ref={ref} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Code.defaultProps = {
  color: 'gray',
  variant: 'subtle',
};

Code.displayName = 'Code';
