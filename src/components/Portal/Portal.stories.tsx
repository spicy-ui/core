import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi';
import { Box, Button, Input, Portal, PortalProps, Stack } from '..';

export default {
  title: 'Portal',
  component: Portal,
} as Meta<PortalProps>;

export const Simple: Story<PortalProps> = () => (
  <Portal>
    <Box position="absolute" bottom={0} right={0} padding="2" color="white" backgroundColor="blue.500">
      I&apos;m a box inside a portal!
    </Box>
  </Portal>
);

export const ContentRerender: Story<PortalProps> = () => {
  const [value, setValue] = React.useState(0);
  const [amount, setAmount] = React.useState(10);

  const increment = React.useCallback(() => setValue((prev) => prev + amount), [amount]);
  const decrement = React.useCallback(() => setValue((prev) => prev - amount), [amount]);

  return (
    <>
      <Stack direction="row" spacing="2" align="center" justify="center">
        <Button onClick={increment}>
          <HiPlusCircle />
        </Button>
        <Input
          sx={{ width: '80px' }}
          type="number"
          value={amount}
          onChange={({ target }) => setAmount(Number.parseInt(target.value, 10))}
        />
        <Button onClick={decrement}>
          <HiMinusCircle />
        </Button>
      </Stack>
      <Portal>
        <Box position="absolute" bottom={0} right={0} padding="2" color="white" backgroundColor="blue.500">
          value = {value}
        </Box>
      </Portal>
      <Portal>
        <Box position="absolute" bottom={0} left={0} padding="2" color="white" backgroundColor="red.500">
          value = {value}
        </Box>
      </Portal>
      <Portal>
        <Box position="absolute" top={0} right={0} padding="2" color="white" backgroundColor="green.500">
          value = {value}
        </Box>
      </Portal>
      <Portal>
        <Box position="absolute" top={0} left={0} padding="2" color="white" backgroundColor="purple.500">
          value = {value}
        </Box>
      </Portal>
    </>
  );
};

export const MultiplePortals: Story<PortalProps> = () => (
  <>
    <Portal>
      <Box position="absolute" bottom={0} right={0} padding="2" color="white" backgroundColor="blue.500">
        I&apos;m a box inside a portal!
      </Box>
    </Portal>
    <Portal>
      <Box position="absolute" bottom={0} left={0} padding="2" color="white" backgroundColor="red.500">
        I&apos;m a box inside a portal!
      </Box>
    </Portal>
  </>
);
