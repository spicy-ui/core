import { AlertProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Alert: ComponentThemeConfig<AlertProps> = {
  baseStyle: ({ color }) => ({
    p: 4,
    position: 'relative',
    bgColor: `${color}.100`,
    borderRadius: 'md',
    color: `${color}.800`,
  }),
};
