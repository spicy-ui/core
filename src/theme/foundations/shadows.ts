import { rgba } from 'polished';
import { colors } from './colors';

export const shadows = {
  none: 'none',
  xs: `0 0 0 1px ${colors.blackAlpha[300]}`,
  sm: `0px 2px 6px ${colors.blackAlpha[300]}`,
  md: `0px 6px 12px ${colors.blackAlpha[300]}`,
  lg: `0px 12px 24px ${colors.blackAlpha[300]}`,
  xl: `0px 24px 48px ${colors.blackAlpha[300]}`,
  inner: `inset 0 2px 4px 0 ${colors.blackAlpha[100]}`,
  outline: `0 0 0 3px ${rgba(colors.blue[500], 0.5)}`,
  warning: `0 0 0 3px ${rgba(colors.orange[500], 0.5)}`,
  error: `0 0 0 3px ${rgba(colors.red[500], 0.5)}`,
};
