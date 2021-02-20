import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { HiOutlineGlobe, HiUsers } from 'react-icons/hi';
import { Avatar, AvatarProps, Box, Stack } from '..';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta<AvatarProps>;

export const Usage: Story<AvatarProps> = (props) => <Avatar {...props} />;

export const Sizes: Story<AvatarProps> = () => (
  <Stack spacing={4} direction="row">
    <Avatar size="xs" name="Andy Bernard" />
    <Avatar size="sm" name="Ryan Howard" />
    <Avatar size="md" name="Pam Beesly" />
    <Avatar size="lg" name="Jim Halpert" />
    <Avatar size="xl" name="Dwight Schrute" />
    <Avatar size="2xl" name="Michael Scott" />
  </Stack>
);

export const Variants: Story<AvatarProps> = () => (
  <Stack spacing={4} direction="row">
    <Avatar variant="circle" name="Jim Halpert" />
    <Avatar variant="rounded" name="Dwight Schrute" />
    <Avatar variant="square" name="Michael Scott" />
  </Stack>
);

export const Fallback: Story<AvatarProps> = () => (
  <Stack spacing={4} direction="row">
    <Avatar name="Angela Martin" />
    <Avatar name="Toby Flenderson" />
    <Avatar src="http://example.com" />
  </Stack>
);

export const Customizing: Story<AvatarProps> = () => (
  <Stack spacing={4} direction="row">
    <Avatar sx={{ bg: 'cyan.500' }} icon={<HiUsers size="50%" />} />
    <Avatar sx={{ bg: 'gray.200', color: 'purple.600' }} variant="rounded" />
    <Avatar
      sx={{ borderColor: 'green.600', bg: 'green.500' }}
      showBorder
      icon={<HiOutlineGlobe size="90%" />}
      variant="square"
    />
  </Stack>
);

export const ChildElements: Story<AvatarProps> = () => (
  <Avatar>
    <Box
      pos="absolute"
      bottom={0}
      right={0}
      size={4}
      bgColor="red.400"
      borderRadius="full"
      sx={{
        animation: ({
          animation: {
            animation: { ping },
          },
        }: any) => ping,
      }}
    />
    <Box pos="absolute" bottom={0} right={0} size={4} bgColor="red.500" borderRadius="full" />
  </Avatar>
);
