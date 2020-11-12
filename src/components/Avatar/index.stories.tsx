import * as React from 'react';
import { uid } from 'react-uid';
import { Avatar, Stack } from '..';

const names = ['Dan Abramov', 'Ryan Florence', 'Resi Respati', 'Alex Gabites', undefined, 'John Brown', 'Alan Sega'];

const avatarSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
    bg: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select', options: avatarSizes },
    },
  },
};

export const Simple = (props: any) => <Avatar {...props} />;
Simple.args = {
  name: 'Dan Abramov',
  src: 'https://bit.ly/dan-abramov',
};

export const Sizes = (props: any) => (
  <Stack orientation="horizontal" spacing={2}>
    {avatarSizes.map((size, idx) => (
      <Avatar key={uid(size, idx)} {...props} size={size as any} name={names[idx]} />
    ))}
  </Stack>
);
