import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { Box } from '../Box';

export interface ModalFooterProps extends SxProps {}

export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  const { sx, children, ...rest } = props;

  const styles = useComponentStyles('ModalFooter', props);

  return (
    <Box as="footer" sx={styles} {...rest}>
      {children}
    </Box>
  );
};

ModalFooter.displayName = 'ModalFooter';
