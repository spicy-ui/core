import { select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Avatar } from '..';
import { Stack } from '../Stack';

const names = ['Dan Abramov', 'Ryan Florence', 'Resi Respati', 'Alex Gabites', undefined, 'John Brown', 'Alan Sega'];

const avatarSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Avatar
    size={select<any>('size', avatarSizes, 'md')}
    name={text('name', 'Dan Abramov')}
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
