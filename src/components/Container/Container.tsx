import * as React from 'react';
import { useComponentStyles } from '../../system';
import { Box, BoxProps } from '../Box';

export interface ContainerProps extends BoxProps {
  /** If `true`, container will center its children. */
  isCentered?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { as, children, sx, isCentered, ...rest } = props;

  const styles = useComponentStyles('Container', props);

  return (
    <Box ref={ref} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Container.displayName = 'Container';
