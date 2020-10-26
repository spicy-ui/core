import { css } from '@styled-system/css';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { ColorMode, useColorMode } from '../ColorModeProvider';

const GlobalStyle = createGlobalStyle<{ colorMode: ColorMode }>`
  ${styledNormalize}
  ${(props) => css(props.theme.styles.global({ ...props }))}
`;

export const CssReset: React.FC = () => {
  const { colorMode } = useColorMode();

  return <GlobalStyle colorMode={colorMode} />;
};
