import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { Box } from '../Box';

export interface ModalHeaderProps extends SxProps {}

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  const { sx, children, ...rest } = props;

  const styles = useComponentStyles('ModalHeader', props);

  return (
    <Box as="header" sx={styles} {...rest}>
      {children}
    </Box>
  );
};

ModalHeader.displayName = 'ModalHeader';
