import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { Box } from '../Box';

export interface AlertProps extends SxProps {
  children?: React.ReactNode;
  color?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { sx, children, color, ...rest } = props;

  const styles = useComponentStyles('Alert', props);

  return (
    <Box ref={ref} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Alert.defaultProps = {
  color: 'gray',
};

Alert.displayName = 'Alert';
