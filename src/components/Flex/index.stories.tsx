import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Flex, FlexProps } from '..';

export default {
  title: 'Flex',
  component: Flex,
} as Meta<FlexProps>;

export const Simple: Story<FlexProps> = (props) => (
  <Flex {...props}>
    <Flex p={2} bgColor="red.50">
      Box 1
    </Flex>
    <Flex p={2} bgColor="green.50">
      Box 2
    </Flex>
    <Flex p={2} bgColor="blue.50">
      Box 3
    </Flex>
    <Flex p={2} bgColor="orange.50">
      Box 4
    </Flex>
    <Flex p={2} bgColor="purple.50">
      Box 5
    </Flex>
    <Flex p={2} bgColor="pink.50">
      Box 6
    </Flex>
  </Flex>
);
