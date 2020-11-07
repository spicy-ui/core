import * as React from 'react';
import { uid } from 'react-uid';
import { Radio, Stack } from '..';

const radioSpaces = ['xs', 'sm', 'md', 'lg'];

const radioColors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    disabled: {
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
      control: { type: 'select', options: radioSpaces },
    },
  },
};

export const Simple = (props: any) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return <Radio {...props} checked={isChecked} onChange={({ target }) => setIsChecked(Boolean(target.checked))} />;
};
Simple.args = {
  label: 'Radio',
};

export const AllSpaces = (props: any) => (
  <Stack spacing="4">
    {radioSpaces.map((space, idx) => (
      <Radio key={uid(space, idx)} {...props} checked space={space} label={space} />
    ))}
  </Stack>
);

export const AllColors = (props: any) => (
  <Stack spacing="4">
    {radioColors.map((color, idx) => (
      <Radio key={uid(color, idx)} {...props} checked color={color} label={color} />
    ))}
  </Stack>
);
