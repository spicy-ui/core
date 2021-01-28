import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { HiOutlineChat, HiOutlineCog } from 'react-icons/hi';
import { uid } from 'react-uid';
import { useTheme } from 'styled-components';
import { Button, ButtonProps, ButtonVariants, Stack } from '..';

const buttonColors = [
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

const buttonVariants: ButtonVariants[] = ['filled', 'outlined', 'ghost', 'link'];

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>;

export const Simple: Story<ButtonProps> = (props) => <Button {...props}>Button</Button>;
Simple.args = { color: 'blue' };

export const Colors: Story<ButtonProps> = (props) => (
  <table>
    <thead>
      <tr>
        <th>&nbsp;</th>
        {buttonVariants.map((variant, idx) => (
          <th key={uid(variant, idx)}>
            <code>{variant}</code>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {buttonColors.map((color, idx) => (
        <tr key={uid(color, idx)}>
          <td>
            <code>{color}</code>
          </td>
          {buttonVariants.map((variant, idy) => (
            <td key={uid(variant, idy)}>
              <Button {...props} color={color} variant={variant}>
                Button
              </Button>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export const Sizes: Story<ButtonProps> = () => (
  <Stack spacing={4} align="center">
    <Button size="xs">Button</Button>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
  </Stack>
);

export const Variants: Story<ButtonProps> = () => (
  <Stack spacing={4} align="center">
    <Button variant="filled">Button</Button>
    <Button variant="outlined">Button</Button>
    <Button variant="ghost">Button</Button>
    <Button variant="link">Button</Button>
    <Button variant="unstyled">Button</Button>
  </Stack>
);

export const WithIcon: Story<ButtonProps> = () => (
  <Stack spacing={4} align="center">
    <Button iconBefore={<HiOutlineCog />}>Settings</Button>
    <Button iconAfter={<HiOutlineChat />}>Message</Button>
  </Stack>
);

export const Loading: Story<ButtonProps> = () => (
  <Stack spacing={4} align="center">
    <Button isLoading>Settings</Button>
    <Button isLoading loadingText="Sending...">
      Send
    </Button>
  </Stack>
);

export const CustomLoadingSpinner: Story<ButtonProps> = () => {
  const { animations } = useTheme();

  return (
    <Button
      isLoading
      spinner={<HiOutlineCog size="1.25em" style={{ animation: animations.spin, animationDuration: '3s' }} />}
    >
      Settings
    </Button>
  );
};

export const CustomButtons: Story<ButtonProps> = () => (
  <Stack spacing={4} direction="column" shouldWrapChildren>
    <Button
      size="md"
      sx={{
        height: '48px',
        width: '200px',
        border: '2px',
        borderColor: 'green.500',
      }}
    >
      Extended Button
    </Button>
    <Button
      sx={{
        height: '24px',
        lineHeight: '1.2',
        transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
        border: '1px',
        px: '8px',
        borderRadius: '2px',
        fontSize: '14px',
        fontWeight: 'semibold',
        bg: '#f5f6f7',
        borderColor: '#ccd0d5',
        color: '#4b4f56',
        _hover: { bg: '#ebedf0' },
        _active: {
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        },
        _focus: {
          boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        },
      }}
    >
      Custom Button
    </Button>
  </Stack>
);
