import * as React from 'react';
import { Box } from '../Box';

const ModalContent: React.FC = ({ children }) => {
  return (
    <Box flex="1 1 auto" py="sm" px="md">
      {children}
    </Box>
  );
};

ModalContent.displayName = 'ModalContent';

export default ModalContent;
