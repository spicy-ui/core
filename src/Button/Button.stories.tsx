import * as React from 'react';
import { uid } from 'react-uid';
import Button, { ButtonSize, ButtonVariant, ButtonColor } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Simple = () => <Button>Button</Button>;

export const Sizes = () => (
  <>
    {['sm', 'base', 'lg'].map((size, index) => (
      <div key={uid(size, index)}>
        <Button size={size as ButtonSize}>Button</Button>
      </div>
    ))}
  </>
);

export const Variants = () => (
  <>
    {['fill', 'outline', 'ghost', 'link'].map((variant, index) => (
      <div key={uid(variant, index)}>
        <Button variant={variant as ButtonVariant}>Button ({variant})</Button>
      </div>
    ))}
  </>
);

export const VariantColors = () => (
  <table>
    <tbody>
      {['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'].map((color, index) => (
        <tr key={uid(color, index)}>
          <td>
            <Button color={color as ButtonColor}>Button ({color})</Button>
          </td>
          <td>
            <Button color={color as ButtonColor} variant="outline">
              Button ({color})
            </Button>
          </td>
          <td>
            <Button color={color as ButtonColor} variant="ghost">
              Button ({color})
            </Button>
          </td>
          <td>
            <Button color={color as ButtonColor} variant="link">
              Button ({color})
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
