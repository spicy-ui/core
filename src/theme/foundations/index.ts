import { borders } from './borders';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { shadows } from './shadows';
import { baseSizes, sizes } from './sizes';
import { transitions } from './transitions';
import { typography } from './typography';
import { zIndices } from './zIndices';

export const foundations = {
  breakpoints,
  space: baseSizes,
  ...typography,
  colors,
  sizes,
  ...borders,
  shadows,
  transitions,
  zIndices,
};
