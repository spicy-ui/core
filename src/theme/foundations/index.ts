import { animation } from './animation';
import { borders } from './borders';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { shadows } from './shadows';
import { sizes, space } from './sizes';
import { transition } from './transition';
import { typography } from './typography';
import { zIndices } from './zIndices';

export const foundations = {
  animation,
  ...borders,
  breakpoints,
  colors,
  shadows,
  sizes,
  space,
  transition,
  ...typography,
  zIndices,
};
