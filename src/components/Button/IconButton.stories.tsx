import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { HiSearch } from 'react-icons/hi';
import { IconButton, IconButtonProps, Stack } from '..';

export default {
  title: 'IconButton',
  component: IconButton,
} as Meta<IconButtonProps>;

export const Simple: Story<IconButtonProps> = (props) => <IconButton {...props} icon={<HiSearch />} />;

export const Colors: Story<IconButtonProps> = () => <IconButton color="blue" icon={<HiSearch />} />;

export const Sizes: Story<IconButtonProps> = () => (
  <Stack spacing={4} direction="row" align="center">
    <IconButton size="xs" icon={<HiSearch />} />
    <IconButton size="sm" icon={<HiSearch />} />
    <IconButton size="md" icon={<HiSearch />} />
    <IconButton size="lg" icon={<HiSearch />} />
  </Stack>
);

export const Variants: Story<IconButtonProps> = () => (
  <Stack spacing={4} direction="row" align="center">
    <IconButton variant="filled" icon={<HiSearch />} />
    <IconButton variant="outlined" icon={<HiSearch />} />
    <IconButton variant="ghost" icon={<HiSearch />} />
    <IconButton variant="link" icon={<HiSearch />} />
    <IconButton variant="unstyled" icon={<HiSearch />} />
  </Stack>
);

export const Loading: Story<IconButtonProps> = () => (
  <Stack spacing={4} direction="row" align="center">
    <IconButton isLoading icon={<HiSearch />} />
  </Stack>
);
