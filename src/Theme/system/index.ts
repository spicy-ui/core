import { buttons } from './components/buttons';
import { typeScale } from './components/typeScale';
import { radii } from './core/borders';
import { breakpoints } from './core/breakpoints';
import { colors } from './core/colors';
import { shadows } from './core/shadows';
import { space } from './core/space';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './core/typography';
import { zIndices } from './core/zIndices';

export const system = {
  // Core
  breakpoints,
  space,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii,
  shadows,
  zIndices,

  // Components
  buttons,
  typeScale,
};
