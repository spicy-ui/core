import * as React from 'react';
import { Box, Portal } from '..';
import { Flex } from '../Flex';

export default {
  title: 'Portal',
  component: Portal,
};

export const Simple = () => {
  return (
    <Portal>
      <Box position="absolute" bottom={0} right={0} padding="sm" color="white" backgroundColor="blue.500">
        I&apos;m a box inside a portal!
      </Box>
    </Portal>
  );
};

export const ContentRerender = () => {
  const [value, setValue] = React.useState(0);

  const increment = React.useCallback(() => setValue((prev) => prev + 1), []);

  return (
    <>
      <Flex width="100%" align="center" justifyContent="center">
        <button type="button" onClick={increment}>
          add
        </button>
      </Flex>
      <Portal>
        <Box position="absolute" bottom={0} right={0} padding="sm" color="white" backgroundColor="blue.500">
          value = {value}
        </Box>
      </Portal>
      <Portal>
        <Box position="absolute" bottom={0} left={0} padding="sm" color="white" backgroundColor="red.500">
          value = {value}
        </Box>
      </Portal>
      <Portal>
        <Box position="absolute" top={0} right={0} padding="sm" color="white" backgroundColor="green.500">
          value = {value}
        </Box>
      </Portal>
      <Portal>
        <Box position="absolute" top={0} left={0} padding="sm" color="white" backgroundColor="purple.500">
          value = {value}
        </Box>
      </Portal>
    </>
  );
};

export const MultiplePortals = () => {
  return (
    <>
      <Portal>
        <Box position="absolute" bottom={0} right={0} padding="sm" color="white" backgroundColor="blue.500">
          I&apos;m a box inside a portal!
        </Box>
      </Portal>
      <Portal>
        <Box position="absolute" bottom={0} left={0} padding="sm" color="white" backgroundColor="red.500">
          I&apos;m a box inside a portal!
        </Box>
      </Portal>
    </>
  );
};
