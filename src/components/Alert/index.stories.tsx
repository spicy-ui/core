import * as React from 'react';
import { uid } from 'react-uid';
import { Alert, Button, Heading, Link, Stack, Text, ToastComponentProps, ToastProvider, useToast } from '..';

const alertVariants = ['info', 'success', 'warning', 'error'];

const alertSpaces = ['sm', 'md', 'lg'];

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: { type: 'select', options: alertVariants },
    },
    space: {
      control: { type: 'select', options: alertSpaces },
    },
    zIndex: { table: { disable: true } },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export const Simple = (props: any) => <Alert {...props}>I am an alert!</Alert>;

export const Variants = (props: any) => (
  <Stack spacing={2}>
    {alertVariants.map((variant, idx) => (
      <Alert key={uid(variant, idx)} {...props} variant={variant as any}>
        [{variant}] The quick brown fox jumped over the lazy dog.
      </Alert>
    ))}
  </Stack>
);

export const Sizes = (props: any) => (
  <Stack spacing={2}>
    {alertSpaces.map((space, idx) => (
      <Alert key={uid(space, idx)} {...props} space={space as any}>
        [{space}] The quick brown fox jumped over the lazy dog.
      </Alert>
    ))}
  </Stack>
);

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertToastProps {
  variant: AlertVariant;
}

const AlertToastDemo: React.FC = () => {
  const { enqueueToast } = useToast<AlertToastProps>();

  return (
    <Stack spacing={4} direction="row">
      <Button
        color="gray"
        onClick={() =>
          enqueueToast({
            message: 'Info toast message',
            props: { variant: 'info' },
          })
        }
      >
        Info Toast
      </Button>
      <Button
        color="green"
        onClick={() =>
          enqueueToast({
            message: 'Success toast message',
            props: { variant: 'success' },
          })
        }
      >
        Success Toast
      </Button>
      <Button
        color="orange"
        onClick={() =>
          enqueueToast({
            message: 'Warning toast message',
            props: { variant: 'warning' },
          })
        }
      >
        Warning Toast
      </Button>
      <Button
        color="red"
        onClick={() =>
          enqueueToast({
            message: 'Error toast message',
            props: { variant: 'error' },
          })
        }
      >
        Error Toast
      </Button>
    </Stack>
  );
};

const AlertAsToast: React.FC<ToastComponentProps<AlertToastProps>> = ({ id, message, props }) => {
  const { closeToast } = useToast();

  return (
    <Alert {...props}>
      <Stack spacing={2}>
        <Text>{message}</Text>
        <Button color="blackAlpha" size="sm" onClick={() => closeToast(id)}>
          Close
        </Button>
      </Stack>
    </Alert>
  );
};

export const AsToast = () => (
  <ToastProvider component={(props) => <AlertAsToast {...props} />}>
    <AlertToastDemo />
  </ToastProvider>
);

export const AsInline = () => (
  <Alert variant="error">
    <Stack spacing={4}>
      <Heading variant="h6">Oops. Something went wrong</Heading>
      <Stack direction="row" align="center" spacing={2}>
        <Button color="red" size="sm">
          Retry
        </Button>
        <Button color="red" size="sm">
          Contact Support
        </Button>
      </Stack>
    </Stack>
  </Alert>
);

export const AsBanner = () => (
  <Alert variant="info" borderRadius="none" textAlign="center">
    You have 4 days left in your trial period. Please <Link href="http://google.com">subscribe here</Link>.
  </Alert>
);
