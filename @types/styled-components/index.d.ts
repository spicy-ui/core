import 'styled-components';

import { System } from '../../src/system';

type ThemeInterface = System;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
