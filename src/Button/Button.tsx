import { darken, rgba } from 'polished';
import styled, { DefaultTheme } from 'styled-components';
import { get, space, SpaceProps, width, WidthProps } from 'styled-system';
import { ButtonVariantFunctions } from '../Theme/system/componentStyles/buttons';
import { variant } from '../util';
import { applyButtonVariations } from './util';

const variants: ButtonVariantFunctions = {
  fill: ({ base, text }, { theme }) => ({
    backgroundColor: get(theme.colors, base),
    color: get(theme.colors, text),
    ':hover': {
      backgroundColor: darken(0.075, get(theme.colors, base)),
    },
    ':active': {
      backgroundColor: darken(0.15, get(theme.colors, base)),
    },
  }),
  outline: ({ base }, { theme }) => ({
    backgroundColor: 'transparent',
    color: get(theme.colors, base),
    border: '2px solid currentColor',
    ':hover': {
      backgroundColor: rgba(get(theme.colors, base), 0.075),
    },
    ':active': {
      backgroundColor: rgba(get(theme.colors, base), 0.15),
    },
  }),
  ghost: ({ base }, { theme }) => ({
    backgroundColor: 'transparent',
    color: get(theme.colors, base),
    ':hover': {
      backgroundColor: rgba(get(theme.colors, base), 0.075),
    },
    ':active': {
      backgroundColor: rgba(get(theme.colors, base), 0.15),
    },
  }),
  link: ({ base }, { theme }) => ({
    backgroundColor: 'transparent',
    color: get(theme.colors, base),
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  }),
};

export type ButtonColor = keyof DefaultTheme['componentStyles']['buttons']['colors'];

export type ButtonSize = keyof DefaultTheme['componentStyles']['buttons']['sizes'];

export type ButtonVariant = keyof DefaultTheme['componentStyles']['buttons']['variants'];

export interface ButtonProps extends SpaceProps, WidthProps {
  /** Color of the button. */
  color?: ButtonColor;
  /** If `true` the button will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Size of the button. */
  size?: ButtonSize;
  /** Variant style of the button. */
  variant?: ButtonVariant;
}

const Button = styled('button')<ButtonProps>`
  ${variant({ prop: 'size', scale: 'componentStyles.buttons.sizes' })}
  ${p => (p.fullWidth ? 'width: 100%;' : '')}
  ${width}
  ${space}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  ${applyButtonVariations(variants)}
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: all 250ms ease 0s;
  user-select: none;

  &:focus {
    box-shadow: ${p => rgba(p.theme.colors.blue[500], 0.6)} 0px 0px 0px 3px;
    z-index: 1;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

Button.defaultProps = {
  color: 'gray',
  fullWidth: false,
  size: 'base',
  type: 'button',
  variant: 'fill',
};

Button.displayName = 'Button';

export default Button;
