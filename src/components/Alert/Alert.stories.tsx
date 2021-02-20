import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Alert, AlertProps, Box, CloseButton, Link, Stack, Text } from '..';
import { Button } from '../Button';

export default {
  title: 'Alert',
  component: Alert,
} as Meta<AlertProps>;

export const Usage: Story<AlertProps> = (props) => (
  <Alert {...props}>
    <strong>Hey you!</strong> Are you using Spicy UI yet?
  </Alert>
);

export const Colors: Story<AlertProps> = () => (
  <Stack spacing={4}>
    <Alert color="emerald">
      <Text fontWeight="medium">Order completed</Text>
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque molestie leo, eu vestibulum
        felis sodales ac. Aliquam nec imperdiet mauris.
      </Text>
      <CloseButton sx={{ top: 2, right: 2, position: 'absolute' }} />
    </Alert>
    <Alert color="amber">
      <Text fontWeight="medium">Attention required</Text>
      <Text my={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque molestie leo, eu vestibulum
        felis sodales ac. Aliquam nec imperdiet mauris.
      </Text>
      <Stack spacing={4} direction="row">
        <Button variant="unstyled" size="sm">
          View orders
        </Button>
        <Button variant="unstyled" size="sm">
          View settings
        </Button>
      </Stack>
      <CloseButton sx={{ top: 2, right: 2, position: 'absolute' }} />
    </Alert>
    <Alert color="red">
      <Text fontWeight="medium">There were 2 errors with your submission</Text>
      <Box as="ul" mt={2} pl={8}>
        <Text as="li">Your password must be at least 8 characters</Text>
        <Text as="li">Your password must include at least 2 special characters</Text>
      </Box>
      <CloseButton sx={{ top: 2, right: 2, position: 'absolute' }} />
    </Alert>
    <Alert color="blue">
      <Stack spacing={2} direction="row">
        <Text fontWeight="medium">Great news!</Text>
        <Text>
          A new update is avaliable,{' '}
          <Link underlineBehaviour="default" href="#somelink#" onClick={(e) => e.preventDefault()}>
            click here
          </Link>{' '}
          to learn more.
        </Text>
      </Stack>
      <CloseButton sx={{ top: 2, right: 2, position: 'absolute' }} />
    </Alert>
  </Stack>
);
