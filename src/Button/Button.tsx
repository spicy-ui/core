import { get } from '@styled-system/core';
import styled, { DefaultTheme } from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import variant from '../util/variant';
import { applyVariants, getTextColor } from './utils';

const variants = {
  fill: (colors: any, props: any) => `
    background-color: ${get(props.theme.colors, colors.base)};
    color: ${get(props.theme.colors, getTextColor(colors.text))};

    &:focus {
      background-color: ${get(props.theme.colors, colors.light)};
    }

    &:hover {
      background-color: ${get(props.theme.colors, colors.dark)};
    }
  `,
  outline: (colors: any, props: any) => `
    background-color: transparent;
    box-shadow: inset 0 0 0 2px ${get(props.theme.colors, colors.base)};
    color: ${get(props.theme.colors, colors.base)};

    &:focus {
      background-color: ${get(props.theme.colors, colors.ghost)};
      box-shadow: inset 0 0 0 2px ${get(props.theme.colors, colors.base)};
    }

    &:hover {
      background-color: ${get(props.theme.colors, colors.dark)};
      box-shadow: inset 0 0 0 2px ${get(props.theme.colors, colors.dark)};
      color: ${get(props.theme.colors, getTextColor(colors.text))};
    }
  `,
  ghost: (colors: any, props: any) => `
    background-color: transparent;
    color: ${get(props.theme.colors, colors.base)};

    &:focus {
      background-color: ${get(props.theme.colors, colors.ghost)};
    }

    &:hover {
      background-color: ${get(props.theme.colors, colors.ghost)};
      color: ${get(props.theme.colors, getTextColor(colors.dark))};
    }
  `,
  link: (colors: any, props: any) => `
    background-color: transparent;
    color: ${get(props.theme.colors, colors.base)};
    vertical-align: inherit;

    &:focus {
      color: ${get(props.theme.colors, getTextColor(colors.light))};
      text-decoration: underline;
    }

    &:hover {
      color: ${get(props.theme.colors, getTextColor(colors.dark))};
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
  margin: 0;
  padding: 0;
  ${p => (p.fullWidth ? 'width: 100%;' : '')}
  background: none;
  background-color: none;
  border: none;
  cursor: ${p => (p.isDisabled ? 'not-allowed' : 'pointer')};
  transition: all ease-in-out 0.18s;
  transition-property: background-color, border, box-shadow, color;
  ${variant({ prop: 'size', scale: 'buttons.sizes' })}
  ${width}
  ${space}
  ${applyVariants(variants)}
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
