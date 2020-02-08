import * as React from 'react';
import { Box, Portal } from '../';

export default {
  title: 'Portal',
  component: Portal,
};

export const Basic = () => {
  return (
    <Portal>
      <Box position="absolute" bottom={0} right={0} padding="sm" color="white" backgroundColor="blue.500">
        I&apos;m a box inside a portal!
      </Box>
    </Portal>
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
