import { transparentize } from 'polished';
import { get } from 'styled-system';
import { colorMode } from '../../util';
import { ComponentTheme } from '../types';

const Menu: ComponentTheme = {
  baseStyle: (props: any) => ({
    minWidth: '56',
    display: 'flex',
    flexDirection: 'column',
    bg: colorMode('white', 'gray.800')(props),
    border: '1px',
    borderColor: transparentize(0.6, get(props.theme.colors, colorMode('gray.300', 'gray.900')(props))),
    borderRadius: 'sm',
    boxShadow: 'sm',
    overflow: 'hidden',
  }),
};

const MenuItem: ComponentTheme = {
  baseStyle: (props: any) => ({
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
    transitionProperty: get(props.theme, 'transitions.property.common'),
    transitionDuration: get(props.theme, 'transitions.duration.300'),
    transitionTimingFunction: get(props.theme, 'transitions.timing.inOut'),
    ':not(:disabled):hover': {
      bg: transparentize(0.8, get(props.theme.colors, colorMode('gray.100', 'gray.700')(props))),
    },
    ':active': {
      bg: transparentize(0.7, get(props.theme.colors, colorMode('gray.100', 'gray.700')(props))),
    },
  }),
};

const MenuDivider: ComponentTheme = {
  baseStyle: (props: any) => ({
    width: 'auto',
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'inherit',
    color: colorMode('gray.300', 'gray.900')(props),
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
