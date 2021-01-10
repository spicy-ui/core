import { transparentize } from 'polished';
import { get } from 'styled-system';
import { ComponentTheme } from '../types';

const Menu: ComponentTheme = {
  baseStyle: () => ({
    minWidth: '56',
    display: 'flex',
    flexDirection: 'column',
    bg: 'white',
    borderWidth: '1px',
    borderRadius: 'sm',
    boxShadow: 'sm',
    overflow: 'hidden',
    userSelect: 'none',
  }),
};

const MenuItem: ComponentTheme = {
  baseStyle: ({ theme }) => ({
    px: '4',
    minHeight: '10',
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    appearance: 'none',
    background: 'none',
    backgroundColor: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    textAlign: 'left',
    transitionProperty: get(theme, 'transitions.property.common'),
    transitionDuration: get(theme, 'transitions.duration.300'),
    transitionTimingFunction: get(theme, 'transitions.timing.inOut'),
    ':not(:disabled):hover': {
      backgroundColor: transparentize(0.5, get(theme.colors, `gray.100`)),
    },
    ':not(:disabled):active, &.active': {
      backgroundColor: transparentize(0.5, get(theme.colors, `gray.200`)),
    },
  }),
};

const MenuDivider: ComponentTheme = {
  baseStyle: () => ({
    width: 'auto',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    opacity: 0.6,
  }),
};

const MenuHeader: ComponentTheme = {
  baseStyle: () => ({
    mx: '4',
    my: '2',
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'sm',
    fontWeight: 'semibold',
  }),
};

export const MenuComponents = {
  Menu,
  MenuItem,
  MenuDivider,
  MenuHeader,
};
