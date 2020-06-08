import * as React from 'react';
import { Box } from '../Box';

const ModalFooter: React.FC = ({ children }) => (
  <Box borderTopWidth="1px" borderTopStyle="solid" borderTopColor="gray.100" py="sm" px="md">
    {children}
  </Box>
);

ModalFooter.displayName = 'ModalFooter';

export { ModalFooter };
