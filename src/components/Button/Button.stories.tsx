import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { HiOutlineChat, HiOutlineCog } from 'react-icons/hi';
import { uid } from 'react-uid';
import { useTheme } from 'styled-components';
import { Button, ButtonProps, ButtonColors, ButtonVariants, Stack } from '..';

const buttonColors: ButtonColors[] = [
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

export const Usage: Story<ButtonProps> = (props) => <Button {...props}>Button</Button>;

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
  <Stack spacing={4} direction="row" align="center">
    <Button size="xs">Button</Button>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
  </Stack>
);

export const Variants: Story<ButtonProps> = () => (
  <Stack spacing={4} direction="row" align="center">
    <Button variant="filled">Button</Button>
    <Button variant="outlined">Button</Button>
    <Button variant="ghost">Button</Button>
    <Button variant="link">Button</Button>
    <Button variant="unstyled">Button</Button>
  </Stack>
);

export const WithIcon: Story<ButtonProps> = () => (
  <Stack spacing={4} direction="row" align="center">
    <Button iconBefore={<HiOutlineCog />}>Settings</Button>
    <Button iconAfter={<HiOutlineChat />}>Message</Button>
  </Stack>
);

export const Loading: Story<ButtonProps> = () => (
  <Stack spacing={4} direction="row" align="center">
    <Button isLoading>Settings</Button>
    <Button isLoading loadingText="Sending...">
      Send
    </Button>
  </Stack>
);

export const CustomLoadingSpinner: Story<ButtonProps> = () => {
  const {
    animation: {
      animation: { spin },
    },
  } = useTheme();

  return (
    <Button isLoading spinner={<HiOutlineCog size="1.25em" style={{ animation: spin, animationDuration: '3s' }} />}>
      Settings
    </Button>
  );
};

export const CustomButtons: Story<ButtonProps> = () => {
  const muiButton = {
    color: 'white',
    backgroundColor: 'blue.500',
    boxShadow: `0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)`,
    padding: '6px 16px',
    fontSize: '0.875rem',
    minWidth: '64px',
    boxSizing: 'border-box',
    transition: `background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: `4px`,
    letterSpacing: `0.02857em`,
    textTransform: `uppercase`,
    border: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    outline: 0,
    position: 'relative',
    alignItems: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
    justifyContent: 'center',
    textDecoration: 'none',
    _hover: { backgroundColor: 'blue.600' },
    _active: { backgroundColor: 'blue.700' },
    _focus: { boxShadow: 'none' },
  };

  const ghButton = {
    position: `relative`,
    display: `inline-block`,
    padding: `6px 16px`,
    fontFamily: `inherit`,
    fontWeight: `600`,
    lineHeight: `20px`,
    whiteSpace: `nowrap`,
    verticalAlign: `middle`,
    cursor: `pointer`,
    userSelect: `none`,
    borderRadius: `6px`,
    appearance: `none`,
    textDecoration: `none`,
    textAlign: `center`,
    fontSize: `14px`,
    color: `rgb(36, 41, 46)`,
    backgroundColor: `rgb(250, 251, 252)`,
    border: `1px solid rgba(27, 31, 35, 0.12)`,
    boxShadow: `rgba(149, 157, 165, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 2px 0px inset`,
    _hover: {
      backgroundColor: `rgb(243, 244, 246)`,
      boxShadow: `rgba(209, 213, 218, 0.2) 0px 1px 0px, rgba(255, 255, 255, 0.1) 0px 2px 0px inset`,
    },
    _active: {
      backgroundColor: `rgb(237, 239, 242)`,
      boxShadow: `rgba(149, 157, 165, 0.1) 0px 2px 0px inset`,
      borderColor: `rgb(209, 213, 218)`,
    },
    _focus: { boxShadow: 'none' },
  };

  return (
    <Stack spacing={4} shouldWrapChildren>
      <Button variant="unstyled" sx={muiButton}>
        Material UI Button
      </Button>
      <Button variant="unstyled" sx={ghButton}>
        Github Button
      </Button>
    </Stack>
  );
};
