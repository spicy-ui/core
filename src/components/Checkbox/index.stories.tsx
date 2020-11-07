import * as React from 'react';
import { uid } from 'react-uid';
import { Checkbox, Stack } from '..';

const checkboxSpaces = ['xs', 'sm', 'md', 'lg'];

const checkboxColors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    isInvalid: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'text' },
    },
    space: {
      control: { type: 'select', options: checkboxSpaces },
    },
  },
};

export const Simple = (props: any) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return <Checkbox {...props} checked={isChecked} onChange={({ target }) => setIsChecked(Boolean(target.checked))} />;
};
Simple.args = {
  label: 'Checkbox',
};

export const AllSpaces = (props: any) => (
  <Stack spacing="4">
    {checkboxSpaces.map((space, idx) => (
      <Checkbox key={uid(space, idx)} {...props} checked space={space} label={space} />
    ))}
  </Stack>
);

export const AllColors = (props: any) => (
  <Stack spacing="4">
    {checkboxColors.map((color, idx) => (
      <Checkbox key={uid(color, idx)} {...props} checked color={color} label={color} />
    ))}
  </Stack>
);
