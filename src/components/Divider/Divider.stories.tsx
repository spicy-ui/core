import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Divider, DividerProps, Stack } from '..';

export default {
  title: 'Divider',
  component: Divider,
} as Meta<DividerProps>;

export const Usage: Story<DividerProps> = (props) => <Divider {...props} />;

export const Vertical: Story<DividerProps> = () => (
  <Stack direction="row">
    <div>one</div>
    <Divider orientation="vertical" />
    <div>two</div>
  </Stack>
);

export const Stylised: Story<DividerProps> = () => (
  <Divider
    sx={{
      color: 'purple.700',
      borderBottomWidth: '2px',
      borderStyle: 'dashed',
    }}
  />
);
