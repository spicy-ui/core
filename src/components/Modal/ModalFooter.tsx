import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { AsProp, ChildrenProp } from '../../types';
import { Box } from '../Box';

export interface ModalFooterProps extends AsProp, ChildrenProp, SxProp {}

export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  const { children, sx, ...rest } = props;

  const styles = useComponentStyles('ModalFooter', props);

  return (
    <Box as="footer" sx={styles} {...rest}>
      {children}
    </Box>
  );
};

ModalFooter.displayName = 'ModalFooter';
