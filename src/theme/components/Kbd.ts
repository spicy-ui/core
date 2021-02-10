import { get } from '@spicy-ui/styled-system';
import { KbdProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Kbd: ComponentThemeConfig<KbdProps> = {
  baseStyle: () => ({
    px: 1.5,
    background: `gray.100`,
    borderRadius: '0.375rem',
    borderWidth: '1px 1px 3px',
    fontSize: '0.8em',
    fontWeight: 700,
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
  }),
};
