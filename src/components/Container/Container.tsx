import * as React from 'react';
import { Box, BoxProps } from '../Box';

export interface ContainerProps extends BoxProps {
  children?: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ children, ...rest }, ref) => (
  <Box ref={ref} mx="auto" px={4} w="full" {...rest}>
    {children}
  </Box>
));
