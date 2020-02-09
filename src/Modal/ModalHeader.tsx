import * as React from 'react';
import { Box } from '../Box';
import { Heading } from '../Heading';

const ModalHeader: React.FC = ({ children }) => {
  return (
    <Box py="sm" px="md">
      <Box display="flex" alignItems="center" height={40}>
        <Heading as="h3" variant="h6">
          {children}
        </Heading>
      </Box>
    </Box>
  );
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
