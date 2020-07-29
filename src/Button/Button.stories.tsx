import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Button, ComponentStyle, Stack, ThemeProvider, util } from '..';

const buttonColors = [
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
  'white',
  'black',
];

const buttonSizes = ['xs', 'sm', 'md', 'lg'];

const buttonVariants = ['filled', 'outlined', 'ghost', 'link'];

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Button
    color={select('color', buttonColors, 'gray')}
    disabled={boolean('disabled', false)}
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
  <Stack spacing="4">
    {buttonSizes.map((size, idx) => (
      <Button key={uid(size, idx)} size={size}>
        Button ({size})
      </Button>
    ))}
  </Stack>
);

export const AllVariants = () => (
  <Stack spacing="4">
    {buttonVariants.map((variant, idx) => (
      <Button key={uid(variant, idx)} variant={variant}>
        Button ({variant})
      </Button>
    ))}
  </Stack>
);

export const CustomButton = () => {
  const customOutline = (props: any): ComponentStyle => ({
    border: '2px',
    borderColor: `${props.color}.500`,
    borderRadius: 'none',
    color: util.colorMode(`${props.color}.600`, `${props.color}.400`)(props),
    ':hover': {
      borderColor: util.colorMode(`${props.color}.700`, `${props.color}.300`)(props),
      color: util.colorMode(`${props.color}.700`, `${props.color}.300`)(props),
    },
  });

  return (
    <ThemeProvider theme={{ components: { Button: { variants: { customOutline } } } }}>
      <Button variant="customOutline" color="blue">
        Custom outline variant
      </Button>
    </ThemeProvider>
  );
};
