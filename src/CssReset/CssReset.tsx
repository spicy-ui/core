import { css } from '@styled-system/css';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { useColorMode } from '../ColorModeProvider';

export const CssReset = createGlobalStyle`
  ${styledNormalize}

  ${(props) => {
    const { colorMode } = useColorMode();
    return css(props.theme.styles.global({ ...props, colorMode }));
  }}
`;
