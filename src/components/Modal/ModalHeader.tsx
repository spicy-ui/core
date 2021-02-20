import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { AsProp, ChildrenProp } from '../../types';
import { Box } from '../Box';

export interface ModalHeaderProps extends AsProp, ChildrenProp, SxProp {}

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  const { children, sx, ...rest } = props;

  const styles = useComponentStyles('ModalHeader', props);

  return (
    <Box as="header" sx={styles} {...rest}>
      {children}
    </Box>
  );
};

ModalHeader.displayName = 'ModalHeader';
