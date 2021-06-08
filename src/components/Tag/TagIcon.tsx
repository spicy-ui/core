import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { ChildrenProp, HTMLAttributes } from '../../types';
import { Box } from '../Box';

export interface TagIconProps extends HTMLAttributes, ChildrenProp, SxProp {
  icon?: React.ReactNode;
}

const TagIcon = React.forwardRef<HTMLSpanElement, TagIconProps>((props, ref) => {
  const { children, icon, ...rest } = props;

  return (
    <Box ref={ref} as="span" {...rest}>
      {icon || children}
    </Box>
  );
});

TagIcon.displayName = 'TagIcon';

export const TagIconBefore = React.forwardRef<HTMLSpanElement, TagIconProps>((props, ref) => {
  const { sx, ...rest } = props;

  const styles = useComponentStyles('TagIconBefore', props);

  return <TagIcon ref={ref} sx={{ ...styles, ...sx }} {...rest} />;
});

TagIconBefore.displayName = 'TagIconBefore';

export const TagIconAfter = React.forwardRef<HTMLSpanElement, TagIconProps>((props, ref) => {
  const { sx, ...rest } = props;

  const styles = useComponentStyles('TagIconAfter', props);

  return <TagIcon ref={ref} sx={{ ...styles, ...sx }} {...rest} />;
});

TagIconAfter.displayName = 'TagIconAfter';
