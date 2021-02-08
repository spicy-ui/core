import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Container, ContainerProps } from '..';
import { Box } from '../Box';

export default {
  title: 'Container',
  component: Container,
} as Meta<ContainerProps>;

export const Simple: Story<ContainerProps> = (props) => (
  <Container {...props}>
    <Box w="full" h="full" bg="red.50">
      Container inner
    </Box>
  </Container>
);
