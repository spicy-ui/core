import styled, { DefaultTheme } from 'styled-components';
import variant from '../util/variant';

export type ButtonSize = keyof DefaultTheme['buttons']['sizes'];

export type ButtonVariant = keyof DefaultTheme['buttons']['variants'];

export type ButtonVariantColor = keyof DefaultTheme['buttons']['colors'];

export interface ButtonProps {
  fullWidth?: boolean;
  isDisabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  variantColor?: ButtonVariantColor;
}

const Button = styled('button')<ButtonProps>`
  margin: 0;
  padding: 0;
  ${p => (p.fullWidth ? 'width: 100%;' : '')}
  background: none;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  transition-property: color, border, background-color;
  ${variant({ prop: 'size', scale: 'buttons.sizes' })}
  ${variant({ prop: 'variant', scale: 'buttons.variants' })}
  ${variant({ prop: 'variantColor', scale: 'buttons.colors' })}
`;

Button.defaultProps = {
  fullWidth: false,
  isDisabled: false,
  size: 'md',
  type: 'button',
  variant: 'solid',
  variantColor: 'gray',
};

Button.displayName = 'Button';

export default Button;
