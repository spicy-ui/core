import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Button, ButtonColor, ButtonSize, ButtonVariant } from '../';

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

const buttonSizes: ButtonSize[] = ['sm', 'base', 'lg'];

const buttonVariants: ButtonVariant[] = ['fill', 'outline', 'ghost', 'link'];

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
    size={select('size', buttonSizes, 'base')}
    variant={select('variant', buttonVariants, 'fill')}
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
  <>
    {buttonSizes.map((size, idx) => (
      <div key={uid(size, idx)}>
        <Button size={size}>Button</Button>
      </div>
    ))}
  </>
);

export const AllVariants = () => (
  <>
    {buttonVariants.map((variant, idx) => (
      <div key={uid(variant, idx)}>
        <Button variant={variant}>Button ({variant})</Button>
      </div>
    ))}
  </>
);
