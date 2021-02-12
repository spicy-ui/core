import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { Box } from '../Box';

export interface ModalBodyProps extends SxProps {}

export const ModalBody: React.FC<ModalBodyProps> = (props) => {
  const { sx, children, ...rest } = props;

  const styles = useComponentStyles('ModalBody', props);

  return (
    <Box sx={styles} {...rest}>
      {children}
    </Box>
  );
};

ModalBody.displayName = 'ModalBody';
