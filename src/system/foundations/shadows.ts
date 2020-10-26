import { rgba } from 'polished';
import { colors } from './colors';

export const shadows = {
  none: 'none',
  xs: '0 0 0 1px rgba(0, 0, 0, 0.15)',
  sm: '0px 2px 6px rgba(0, 0, 0, 0.15)',
  md: '0px 6px 12px rgba(0, 0, 0, 0.15)',
  lg: '0px 12px 24px rgba(0, 0, 0, 0.15)',
  xl: '0px 24px 48px rgba(0, 0, 0, 0.15)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: `0 0 0 3px ${rgba(colors.blue[500], 0.5)}`,
  warning: `0 0 0 3px ${rgba(colors.orange[500], 0.5)}`,
  error: `0 0 0 3px ${rgba(colors.red[500], 0.5)}`,
};
