import { components } from './components';
import { foundations } from './foundations';

export const theme = {
  ...foundations,
  components,
};

export { AllColors, ColorScales } from './foundations';
export { ComponentThemeConfig, ComponentThemeScale } from './types';
