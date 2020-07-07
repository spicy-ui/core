import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { Field, Input } from '..';

export default {
  title: 'Field',
  component: Field,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Field
    id="example"
    label={text('label', 'Example')}
    helperText={text('helperText', 'Helper text')}
    errorText={text('errorText', 'An error occurred')}
    isDisabled={boolean('isDisabled', false)}
    isInvalid={boolean('isInvalid', false)}
    isReadOnly={boolean('isReadOnly', false)}
    isRequired={boolean('isRequired', false)}
  >
    <Input onChange={({ target }) => action('onChange')(target.value)} />
  </Field>
);
