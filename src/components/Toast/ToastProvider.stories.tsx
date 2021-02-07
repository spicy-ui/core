import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Stack, Alert, Button, ToastProvider, ToastProviderProps, ToastComponentProps, useToast } from '..';
import { CloseButton } from '../CloseButton';

export default {
  title: 'Toast',
  component: ToastProvider,
} as Meta<ToastProviderProps>;

const Demo = () => {
  const { queueToast } = useToast();

  const addToast = React.useCallback(() => queueToast({ message: "Hello, I'm a toast" }), [queueToast]);
  const addPersistentToast = React.useCallback(
    () => queueToast({ message: "Hello, I'm persistent a toast", persist: true }),
    [queueToast],
  );

  return (
    <Stack spacing={4} direction="row">
      <Button onClick={addToast} type="button">
        Add Toast
      </Button>
      <Button onClick={addPersistentToast} type="button">
        Add Persistent Toast
      </Button>
    </Stack>
  );
};

const Toast = ({ id, message, props }: ToastComponentProps) => {
  const { closeToast } = useToast();

  return (
    <Alert {...props}>
      {message}
      <CloseButton onClick={() => closeToast(id)} sx={{ pos: 'absolute', top: 2, right: 2 }} />
    </Alert>
  );
};

export const Simple: Story<ToastProviderProps> = () => {
  return (
    <ToastProvider component={Toast}>
      <Demo />
    </ToastProvider>
  );
};
