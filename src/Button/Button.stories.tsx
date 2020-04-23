import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Button, ButtonColor, ButtonSize, ButtonVariant, Stack } from '..';

const buttonColors: ButtonColor[] = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
];

const buttonSizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg'];

const buttonVariants: ButtonVariant[] = ['filled', 'outlined', 'ghost', 'link'];

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Button
    color={select('color', buttonColors, 'gray')}
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', false)}
    size={select('size', buttonSizes, 'md')}
    variant={select('variant', buttonVariants, 'filled')}
  >
    Button
  </Button>
);

export const AllColorsAndVariants = () => (
  <table>
    <tbody>
      {buttonColors.map((color, idx) => (
        <tr key={uid(color, idx)}>
          {buttonVariants.map((variant, idy) => (
            <td key={uid(variant, idy)}>
              <Button color={color} disabled={boolean('disabled', false)} variant={variant}>
                Button ({color})
              </Button>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export const AllSizes = () => (
  <Stack spacing="base">
    {buttonSizes.map((size, idx) => (
      <Button key={uid(size, idx)} size={size}>
        Button ({size})
      </Button>
    ))}
  </Stack>
);

export const AllVariants = () => (
  <Stack spacing="base">
    {buttonVariants.map((variant, idx) => (
      <Button key={uid(variant, idx)} variant={variant}>
        Button ({variant})
      </Button>
    ))}
  </Stack>
);
