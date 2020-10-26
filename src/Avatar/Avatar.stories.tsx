import { select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Avatar } from '..';
import { Stack } from '../Stack';

const names = ['Dan Abrahmov', 'Ryan Florence', 'Resi Respati', 'Alex Gabites'];

const avatarSizes = ['xs', 'sm', 'md', 'lg'];

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Avatar
    size={select<any>('size', avatarSizes, 'md')}
    name={text('name', 'Dan Abrahmov')}
    src={text('src', 'https://bit.ly/dan-abramov')}
  />
);

export const Sizes = () => (
  <Stack orientation="horizontal" spacing={2}>
    {avatarSizes.map((size, idx) => (
      <Avatar key={uid(size, idx)} size={size as any} name={names[idx]} />
    ))}
  </Stack>
);
