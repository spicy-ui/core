import * as React from 'react';
import { uid } from 'react-uid';
import Button, { ButtonVariant, ButtonVariantColor } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Simple = () => <Button>Button</Button>;

export const Variants = () => (
  <>
    {['solid', 'outline', 'ghost', 'link'].map((variant, index) => (
      <div key={uid(variant, index)}>
        <Button variant={variant as ButtonVariant}>{variant}</Button>
      </div>
    ))}
  </>
);

export const VariantColors = () => (
  <>
    {[
      'transparent',
      'black',
      'white',
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
    ].map((color, index) => (
      <div key={uid(color, index)}>
        <Button variantColor={color as ButtonVariantColor}>{color}</Button>
      </div>
    ))}
  </>
);
