import * as React from 'react';
import { uid } from 'react-uid';
import { Switch, Stack } from '..';

const switchSpaces = ['sm', 'md', 'lg'];

const switchColors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

export default {
  title: 'Switch',
  component: Switch,
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
    color: {
      control: { type: 'select', options: switchColors },
    },
    space: {
      control: { type: 'select', options: switchSpaces },
    },
  },
};

export const Simple = (props: any) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return <Switch {...props} checked={isChecked} onChange={({ target }) => setIsChecked(Boolean(target.checked))} />;
};

export const AllSpaces = (props: any) => (
  <Stack spacing="4">
    {switchSpaces.map((space, idx) => (
      <Switch key={uid(space, idx)} {...props} checked space={space} />
    ))}
  </Stack>
);

export const AllColors = (props: any) => (
  <Stack spacing="4">
    {switchColors.map((color, idx) => (
      <Switch key={uid(color, idx)} {...props} checked color={color} />
    ))}
  </Stack>
);
