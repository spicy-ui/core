import { darken, rgba } from 'polished';
import styled, { DefaultTheme } from 'styled-components';
import { get, space, SpaceProps, width, WidthProps } from 'styled-system';
import variant from '../util/variant';
import { applyVariants, getTextColor } from './util';

interface VariantColor {
  base: string;
  text: string;
}

interface VariantProps extends ButtonProps {
  theme: DefaultTheme;
}

interface VariantFunctions {
  [key: string]: (color: VariantColor, props: VariantProps) => string;
}

const variants: VariantFunctions = {
  fill: ({ base, text }, { theme }) => `
    background-color: ${get(theme.colors, base)};
    color: ${get(theme.colors, getTextColor(text))};

    &:hover {
      background-color: ${darken(0.075, get(theme.colors, base))};
    }

    &:active {
      background-color: ${darken(0.15, get(theme.colors, base))};
    }
  `,
  outline: ({ base }, { theme }) => `
    background-color: transparent;
    color: ${get(theme.colors, getTextColor(base))};
    border: 2px solid currentcolor;

    &:hover {
      background-color: ${rgba(get(theme.colors, base), 0.075)};
    }

    &:active {
      background-color: ${rgba(get(theme.colors, base), 0.15)};
    }
  `,
  ghost: ({ base }, { theme }) => `
    background-color: transparent;
    color: ${get(theme.colors, getTextColor(base))};

    &:hover {
      background-color: ${rgba(get(theme.colors, base), 0.075)};
    }

    &:active {
      background-color: ${rgba(get(theme.colors, base), 0.15)};
    }
  `,
  link: ({ base }, { theme }) => `
    background-color: transparent;
    color: ${get(theme.colors, getTextColor(base))};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
};

export type ButtonSize = keyof DefaultTheme['buttons']['sizes'];

export type ButtonColor = keyof DefaultTheme['buttons']['colors'];

export type ButtonVariant = keyof typeof variants;

export interface ButtonProps extends SpaceProps, WidthProps {
  fullWidth?: boolean;
  isDisabled?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
}

const Button = styled('button')<ButtonProps>`
  ${variant({ prop: 'size', scale: 'buttons.sizes' })}
  ${p => (p.fullWidth ? 'width: 100%;' : '')}
  ${width}
  ${space}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  ${applyVariants(variants)}
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: all 250ms ease 0s;
  user-select: none;

  &:focus {
    box-shadow: ${p => rgba(get(p.theme.colors, 'blue.500'), 0.6)} 0px 0px 0px 3px;
    z-index: 1;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

Button.defaultProps = {
  fullWidth: false,
  isDisabled: false,
  size: 'base',
  type: 'button',
  color: 'gray',
  variant: 'fill',
};

Button.displayName = 'Button';

export default Button;
