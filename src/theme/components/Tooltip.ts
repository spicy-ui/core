import { TooltipProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Tooltip: ComponentThemeConfig<TooltipProps> = {
  baseStyle: () => ({
    px: 2,
    py: 0.5,
    maxW: 80,
    bg: 'gray.700',
    borderRadius: 'sm',
    boxShadow: 'md',
    color: 'whiteAlpha.900',
    fontSize: 'sm',
    fontWeight: 'medium',
    zIndex: 'tooltip',
  }),
};
