import * as React from 'react';
import { ColorModeProvider } from '../ColorModeProvider';
import { CssReset } from '../CssReset';
import { ExtendableSystem } from '../system';
import { ThemeProvider } from '../ThemeProvider';

export interface SpicyProviderProps {
  theme?: ExtendableSystem;
}

const SpicyProvider: React.FC<SpicyProviderProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider initial={theme?.config?.initialColorMode}>
      <CssReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
);

SpicyProvider.displayName = 'SpicyProvider';

export { SpicyProvider };
