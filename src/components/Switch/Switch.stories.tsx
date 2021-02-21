import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Switch, SwitchProps, Stack } from '..';

const switchColors = [
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
  title: 'Switch',
  component: Switch,
} as Meta<SwitchProps>;

export const Usage: Story<SwitchProps> = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return <Switch {...props} checked={isChecked} onChange={({ target }) => setIsChecked(Boolean(target.checked))} />;
};

export const Colors: Story<SwitchProps> = () => (
  <Stack spacing="4">
    {switchColors.map((color, idx) => (
      <Switch key={uid(color, idx)} checked color={color} />
    ))}
  </Stack>
);

export const Sizes: Story<SwitchProps> = () => (
  <Stack spacing="4">
    <Switch checked size="sm" />
    <Switch checked size="md" />
    <Switch checked size="lg" />
  </Stack>
);
