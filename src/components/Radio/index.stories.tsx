import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Radio, RadioProps, Stack, Text } from '..';

const radioColors = [
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
  title: 'Radio',
  component: Radio,
} as Meta<RadioProps>;

export const Simple: Story<RadioProps> = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return <Radio {...props} checked={isChecked} onChange={({ target }) => setIsChecked(Boolean(target.checked))} />;
};
Simple.args = {
  label: 'Radio',
};

export const Group: Story<RadioProps> = () => {
  const options = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
    { label: 'Option 4', value: 'opt4' },
  ];

  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <>
      <Stack spacing="4">
        {options.map((option, index) => (
          <Radio
            key={uid(option, index)}
            label={option.label}
            value={option.value}
            checked={option.value === selected}
            onChange={({ target }) => setSelected(target.value)}
          />
        ))}
      </Stack>
      <Text mt={4}>
        Selected: <code>{selected}</code>
      </Text>
    </>
  );
};

export const Colors: Story<RadioProps> = () => (
  <Stack spacing="4">
    {radioColors.map((color, idx) => (
      <Radio key={uid(color, idx)} checked color={color} label={color} />
    ))}
  </Stack>
);

export const Sizes: Story<RadioProps> = () => (
  <Stack spacing="4">
    <Radio checked size="xs" label="xs" />
    <Radio checked size="sm" label="sm" />
    <Radio checked size="md" label="md" />
    <Radio checked size="lg" label="lg" />
  </Stack>
);
