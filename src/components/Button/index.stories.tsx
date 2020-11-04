import * as React from 'react';
import { uid } from 'react-uid';
import { Button } from '..';

const buttonColors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];
const buttonSizes = ['xs', 'sm', 'md', 'lg'];
const buttonVariants = ['filled', 'outlined', 'ghost', 'link', 'unstyled'];

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select', options: buttonColors },
    },
    size: {
      control: { type: 'select', options: buttonSizes },
    },
    variant: {
      control: { type: 'select', options: buttonVariants },
    },
    transitionDelay: { table: { disable: true } },
    transitionDuration: { table: { disable: true } },
    transitionProperty: { table: { disable: true } },
    transitionTiming: { table: { disable: true } },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export const Simple = (props: any) => <Button {...props}>Button</Button>;
Simple.args = {
  disabled: false,
  color: 'gray',
  size: 'md',
  variant: 'filled',
};

export const Colors = (props: any) => (
  <table>
    <tbody>
      {buttonColors.map((color, idx) => (
        <tr key={uid(color, idx)}>
          {buttonVariants.map((variant, idy) => (
            <td key={uid(variant, idy)}>
              <Button {...props} color={color} variant={variant}>
                Button ({color})
              </Button>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
Colors.args = {
  disabled: false,
};
