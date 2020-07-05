import 'styled-components';

import { ExtendableSystem } from '../../src/system';

type ThemeInterface = ExtendableSystem;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
