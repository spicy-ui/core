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
    <Field id="disabled" label="Disabled" isDisabled>
      <Input value="Disabled field" />
    </Field>
    <Field id="readonly" label="Readonly" isReadOnly>
      <Input value="Readonly field" />
    </Field>
    <Field id="required" label="Required" isRequired>
      <Input value="Required field" />
    </Field>
    <Field id="invalid" label="Invalid" isInvalid>
      <Input value="Invalid field" />
    </Field>
  </Stack>
);
