import * as React from 'react';
import { Flex, Text } from '../';

export default {
  title: 'Flex',
  component: Flex,
};

export const Simple = () => (
  <Flex align="center">
    <Flex align="flex-start" bg="red.50" width="200px" height="200px">
      <Text bg="red.200">Flex 1</Text>
    </Flex>
    <Flex align="center" justify="center" bg="green.50" width="200px" height="200px">
      <Text bg="green.200">Flex 2</Text>
    </Flex>
    <Flex align="flex-end" justify="flex-end" bg="blue.50" width="200px" height="200px">
      <Text bg="blue.200">Flex 3</Text>
    </Flex>
  </Flex>
);
