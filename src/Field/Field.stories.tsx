import { boolean, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { Field, Input, Stack } from '../';

export default {
  title: 'Field',
  component: Field,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Field
    id="email"
    label="Email"
    helperText="This will be the email you use to log into your account"
    errorText="That username is already in use"
    isDisabled={boolean('isDisabled', false)}
    isInvalid={boolean('isInvalid', false)}
    isReadOnly={boolean('isReadOnly', false)}
    isRequired={boolean('isRequired', false)}
  >
    <Input placeholder="example@gmail.com" type="email" />
  </Field>
);

export const Fields = () => (
  <Stack spacing="base">
    <Field id="uuid" label="UUID" helperText="This is a UUID for your new account" isReadOnly isDisabled>
      <Input value="c3f3b729-0a28-44d7-ac13-63b23cf7b5d3" />
    </Field>
    <Field id="name" label="Name">
      <Input />
    </Field>
    <Field id="username" label="Username" isRequired>
      <Input />
    </Field>
    <Field id="password" label="Password" isInvalid errorText="Please enter a password">
      <Input type="password" />
    </Field>
  </Stack>
);
