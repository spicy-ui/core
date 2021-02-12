import * as React from 'react';
import { HiX } from 'react-icons/hi';
import { useComponentStyles } from '../../system';
import { IconButton, IconButtonProps } from '../Button';

export interface TagActionProps extends Omit<IconButtonProps, 'isRound' | 'variant'> {}

export const TagAction = React.forwardRef<HTMLButtonElement, TagActionProps>((props, ref) => {
  const { children = <HiX />, sx, ...rest } = props;

  const styles = useComponentStyles('TagAction', props);

  return (
    <IconButton ref={ref} sx={styles} isRound variant="unstyled" {...rest}>
      {children}
    </IconButton>
  );
});

TagAction.displayName = 'TagAction';
