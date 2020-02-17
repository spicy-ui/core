import css from '@styled-system/css';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { get } from 'styled-system';
import { useColorMode } from '../ColorMode';

const useModeColors = (props: any) => {
  const { mode } = useColorMode();

  const styles = {
    light: {
      color: 'text.base',
      backgroundColor: 'white',
    },
    dark: {
      color: 'text.inverse',
      backgroundColor: 'gray.800',
    },
  };

  return css(styles[mode])(props);
};

export const CSSReset = createGlobalStyle`
  ${styledNormalize}

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    color: ${p => useModeColors(p).color};
    ${p => css(get(p.theme.componentStyles, 'body1'))(p)}
  }

  body {
    background-color: ${p => useModeColors(p).backgroundColor};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  em {
    ${p => css(get(p.theme.componentStyles, 'em'))(p)}
  }

  strong {
    ${p => css(get(p.theme.componentStyles, 'strong'))(p)}
  }

  small {
    ${p => css(get(p.theme.componentStyles, 'small'))(p)}
  }

  code {
    ${p => css(get(p.theme.componentStyles, 'code'))(p)}
  }

  pre {
    overflow-x: auto;

    code {
      color: inherit;
    }
  }
`;
