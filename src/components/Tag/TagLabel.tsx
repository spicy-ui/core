import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { AsProp, ChildrenProp, HTMLAttributes } from '../../types';
import { Box } from '../Box';

export interface TagLabelProps extends Omit<HTMLAttributes, 'label'>, AsProp, ChildrenProp, SxProp {
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
