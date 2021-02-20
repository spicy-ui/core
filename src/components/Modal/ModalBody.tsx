import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { AsProp, ChildrenProp } from '../../types';
import { Box } from '../Box';

export interface ModalBodyProps extends AsProp, ChildrenProp, SxProp {}

export const ModalBody: React.FC<ModalBodyProps> = (props) => {
  const { children, sx, ...rest } = props;

  const styles = useComponentStyles('ModalBody', props);

  return (
    <Box sx={styles} {...rest}>
      {children}
    </Box>
  );
};

ModalBody.displayName = 'ModalBody';
