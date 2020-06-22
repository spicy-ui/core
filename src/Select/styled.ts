import { css as withSystem } from '@styled-system/css';
import { createShouldForwardProp, props as forwardProps } from '@styled-system/should-forward-prop';
import { darken, lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { get, space, width } from 'styled-system';
import { useColorMode } from '../ColorMode';
import { SelectProps } from './types';

const outlined = ({ colorMode }: UseSelectStyleProps) => {
  if (colorMode === 'dark') {
    return {
      backgroundColor: `gray.800`,
      borderColor: `gray.700`,
      color: 'text.inverse',
      ':hover': {
        borderColor: `gray.600`,
      },
    };
  }

  return {
    backgroundColor: `white`,
    borderColor: `gray.100`,
    color: 'text.base',
    ':hover': {
      borderColor: `gray.200`,
    },
  };
};

const filled = ({ colorMode, theme }: UseSelectStyleProps) => {
  if (colorMode === 'dark') {
    return {
      backgroundColor: `gray.700`,
      color: 'text.inverse',
      ':hover': {
        backgroundColor: lighten(0.05, get(theme.colors, `gray.700`)),
      },
    };
  }

  return {
    backgroundColor: `gray.100`,
    color: 'text.base',
    ':hover': {
      backgroundColor: darken(0.05, get(theme.colors, `gray.100`)),
    },
  };
};

const baseStyles = ({ colorMode }: UseSelectStyleProps) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: '1px solid transparent',
  color: colorMode === 'dark' ? 'text.inverse' : 'text.base',
  outline: 'none',
  transition: 'all 250ms ease 0s',
});

const sizes = ({ space: spaceProp }: UseSelectStyleProps) => {
  switch (spaceProp) {
    case 'xs':
      return {
        borderRadius: 'sm',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: 1.2,
        px: 4,
        height: 24,
      };
    case 'sm':
      return {
        borderRadius: 'sm',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: 1.2,
        px: 8,
        height: 32,
      };
    case 'md':
      return {
        borderRadius: 'sm',
        fontSize: 'base',
        fontWeight: 'normal',
        lineHeight: 1.2,
        px: 12,
        height: 40,
      };
    case 'lg':
      return {
        borderRadius: 'sm',
        fontSize: 'lg',
        fontWeight: 'normal',
        lineHeight: 1.2,
        px: 16,
        height: 48,
      };
    default:
      return {};
  }
};

const focus = ({ isInvalid, theme, colorMode }: UseSelectStyleProps) => {
  if (isInvalid) {
    return {
      boxShadow: theme.shadows.error(colorMode === 'dark'),
      zIndex: 1,
    };
  }

  return {
    ':focus': {
      boxShadow: theme.shadows.focus(colorMode === 'dark'),
      zIndex: 1,
    },
  };
};

const disabled = {
  ':disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
};

const variants = (props: UseSelectStyleProps) => {
  switch (props.variant) {
    case 'outlined':
      return outlined(props);
    case 'filled':
      return filled(props);
    default:
      return {};
  }
};

interface UseSelectStyleProps extends SelectProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

const useInputStyle = (props: Omit<UseSelectStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const selectProps = { ...props, colorMode };

  return css(
    withSystem({
      ...baseStyles(selectProps),
      width: selectProps.fullWidth ? '100%' : undefined,
      ...sizes(selectProps),
      ...width(selectProps),
      ...space(selectProps),
      ...focus(selectProps),
      ...disabled,
      ...variants(selectProps),
    })(props),
  );
};

const shouldForwardProp = createShouldForwardProp([...forwardProps, 'fullWidth', 'isInvalid', 'space', 'variant']);

export const StyledSelect = styled('select').withConfig<SelectProps>({ shouldForwardProp })(useInputStyle);
