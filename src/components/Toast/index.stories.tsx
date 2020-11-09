import * as React from 'react';
import { Box, Button, Flex, Stack, ToastProvider, useToast } from '..';
import { ToastComponentProps } from './types';

export default {
  title: 'Toast',
  component: ToastProvider,
};

const DemoControls = () => {
  const { enqueueToast } = useToast();

  return (
    <Stack direction="row" spacing={4}>
      <Button onClick={() => enqueueToast({ message: 'I will dismiss in 5 seconds' })}>Add Toast</Button>
      <Button onClick={() => enqueueToast({ message: 'I will persist', persist: true })}>Add Persistent Toast</Button>
    </Stack>
  );
};

const ToastComponent: React.FC<ToastComponentProps> = ({ id, message }) => {
  const { closeToast } = useToast();

  return (
    <Flex p={2}>
      <Box mr="auto">{message}</Box>
      <Button onClick={() => closeToast(id)} color="red" size="xs">
        X
      </Button>
    </Flex>
  );
};

export const Simple = (props: any) => {
  return (
    <ToastProvider {...props} component={(toastProps) => <ToastComponent {...toastProps} />}>
      <DemoControls />
    </ToastProvider>
  );
};
