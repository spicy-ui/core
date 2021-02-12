import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { Box } from '../Box';

export interface TagLabelProps extends SxProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
}

export const TagLabel = React.forwardRef<HTMLSpanElement, TagLabelProps>((props, ref) => {
  const { children, sx, label, ...rest } = props;

  const styles = useComponentStyles('TagLabel', props);

  return (
    <Box ref={ref} as="span" sx={styles} {...rest}>
      {label || children}
    </Box>
  );
});

TagLabel.displayName = 'TagLabel';
