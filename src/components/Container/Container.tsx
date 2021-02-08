import * as React from 'react';
import { Box, BoxProps } from '../Box';

export interface ContainerProps extends BoxProps {
  children?: React.ReactNode;
  isCentered?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ children, isCentered, ...rest }, ref) => (
  <Box
    ref={ref}
    mx="auto"
    px={4}
    w="full"
    {...(isCentered ? { d: 'flex', flexDirection: 'column', alignItems: 'center' } : {})}
    {...rest}
  >
    {children}
  </Box>
));
