import 'styled-components';

import { system } from '../../src/Theme/system';

type ThemeInterface = typeof system;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
