import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import Button, { ButtonColor, ButtonSize, ButtonVariant } from './Button';

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
      {buttonColors.map((color, index) => (
        <tr key={uid(color, index)}>
          {buttonVariants.map((variant, index2) => (
            <td key={uid(variant, index2)}>
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
    {buttonSizes.map((size, index) => (
      <div key={uid(size, index)}>
        <Button size={size}>Button</Button>
      </div>
    ))}
  </>
);

export const AllVariants = () => (
  <>
    {buttonVariants.map((variant, index) => (
      <div key={uid(variant, index)}>
        <Button variant={variant}>Button ({variant})</Button>
      </div>
    ))}
  </>
);
