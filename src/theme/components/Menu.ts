import { get } from '@spicy-ui/styled-system';
import { transparentize } from 'polished';
import { MenuProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Menu: ComponentThemeConfig<MenuProps> = {
  baseStyle: ({ isFullWidth }) => ({
    minWidth: 56,
    width: isFullWidth ? 'full' : 'auto',
    display: 'flex',
    flexDirection: 'column',
    bg: 'white',
    borderRadius: 'sm',
    borderWidth: '1px',
    boxShadow: 'sm',
    outline: 0,
    overflow: 'hidden',
    userSelect: 'none',
  }),
};

export const MenuDivider: ComponentThemeConfig = {
  baseStyle: () => ({
    width: 'auto',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    opacity: 0.6,
  }),
};

export const MenuHeader: ComponentThemeConfig = {
  baseStyle: () => ({
    mx: 4,
    my: 2,
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'sm',
    fontWeight: 'semibold',
  }),
};

export const MenuItem: ComponentThemeConfig = {
  baseStyle: ({ theme }) => ({
    px: 4,
    minHeight: 10,
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
    transitionProperty: 'common',
    transitionTimingFunction: 'inOut',
    transitionDuration: '300',
    _hover: {
      backgroundColor: transparentize(0.5, get(theme.colors, `gray.100`)),
      _disabled: {
        backgroundColor: 'none',
      },
    },
    _active: {
      backgroundColor: transparentize(0.5, get(theme.colors, `gray.200`)),
    },
  }),
};
