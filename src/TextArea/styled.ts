import { css as withSystem } from '@styled-system/css';
import { createShouldForwardProp, props as forwardProps } from '@styled-system/should-forward-prop';
import { darken, lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { get, space, width } from 'styled-system';
import { useColorMode } from '../ColorMode';
import { TextAreaProps } from './types';

const outlined = ({ colorMode }: useTextAreaStyleProps) => {
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

const filled = ({ colorMode, theme }: useTextAreaStyleProps) => {
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

const baseStyles = (props: useTextAreaStyleProps) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: '1px solid transparent',
  color: props.colorMode === 'dark' ? 'text.inverse' : 'text.base',
  outline: 'none',
  transition: 'all 250ms ease 0s',
});

const sizes = (props: useTextAreaStyleProps) => {
  switch (props.space) {
    case 'xs':
      return {
        borderRadius: 'sm',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: 1.34,
        px: 4,
        py: 3,
        minHeight: 24,
      };
    case 'sm':
      return {
        borderRadius: 'sm',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: 1.15,
        px: 8,
        py: 7,
        minHeight: 32,
      };
    case 'md':
      return {
        borderRadius: 'sm',
        fontSize: 'base',
        fontWeight: 'normal',
        lineHeight: 1.5,
        px: 12,
        py: 7,
        minHeight: 40,
      };
    case 'lg':
      return {
        borderRadius: 'sm',
        fontSize: 'lg',
        fontWeight: 'normal',
        lineHeight: 1.34,
        px: 16,
        py: 11,
        minHeight: 48,
      };
    default:
      return {};
  }
};

const focus = (props: useTextAreaStyleProps) => {
  if (props.isInvalid) {
    return {
      boxShadow: props.theme.shadows.error(props.colorMode === 'dark'),
      zIndex: 1,
    };
  }

  return {
    ':focus': {
      boxShadow: props.theme.shadows.focus(props.colorMode === 'dark'),
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

const variants = (props: useTextAreaStyleProps) => {
  switch (props.variant) {
    case 'outlined':
      return outlined(props);
    case 'filled':
      return filled(props);
    default:
      return {};
  }
};

interface useTextAreaStyleProps extends TextAreaProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

const useTextAreaStyle = (props: Omit<useTextAreaStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const _props = { ...props, colorMode };

  return css(
    withSystem({
      ...baseStyles(_props),
      width: _props.fullWidth ? '100%' : undefined,
      ...sizes(_props),
      ...width(_props),
      ...space(_props),
      ...focus(_props),
      ...disabled,
      ...variants(_props),
    })(props),
  );
};

const shouldForwardProp = createShouldForwardProp([...forwardProps, 'fullWidth', 'isInvalid', 'space', 'variant']);

export const StyledTextArea = styled('textarea').withConfig<TextAreaProps>({ shouldForwardProp })(useTextAreaStyle);
