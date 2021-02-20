import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Checkbox, CheckboxColors, CheckboxProps, Stack } from '..';

const checkboxColors: CheckboxColors[] = [
  'blueGray',
  'coolGray',
  'gray',
  'trueGray',
  'warmGray',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'lightBlue',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'whiteAlpha',
  'blackAlpha',
];

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Usage: Story<CheckboxProps> = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return <Checkbox {...props} checked={isChecked} onChange={({ target }) => setIsChecked(Boolean(target.checked))} />;
};
Usage.args = {
  label: 'Checkbox',
};

export const Colors: Story<CheckboxProps> = () => (
  <Stack spacing="4">
    {checkboxColors.map((color, idx) => (
      <Checkbox key={uid(color, idx)} checked color={color} label={color} />
    ))}
  </Stack>
);

export const Sizes: Story<CheckboxProps> = () => (
  <Stack spacing="4">
    <Checkbox checked size="xs" label="xs" />
    <Checkbox checked size="sm" label="sm" />
    <Checkbox checked size="md" label="md" />
    <Checkbox checked size="lg" label="lg" />
  </Stack>
);
