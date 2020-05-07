import { DeepPartial } from 'utility-types';
import { system } from './system';

export interface ThemeProps {
  /** Custom theme to merge with the default theme. */
  theme?: DeepPartial<typeof system>;
}
