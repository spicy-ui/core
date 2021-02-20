import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Container, ContainerProps, Box } from '..';

export default {
  title: 'Container',
  component: Container,
} as Meta<ContainerProps>;

export const Usage: Story<ContainerProps> = (props) => (
  <Container {...props}>
    <Box w="full" h="full" bg="red.50">
      Container inner
    </Box>
  </Container>
);

export const Centered: Story<ContainerProps> = (props) => (
  <Container {...props}>
    <Box p={4} bg="red.50">
      Container inner
    </Box>
  </Container>
);
Centered.args = { isCentered: true };
