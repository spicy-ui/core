import css from '@styled-system/css';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { get } from 'styled-system';

export const CSSReset = createGlobalStyle`
  ${styledNormalize}

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    color: ${p => p.theme.colors.gray[900]};
    ${p => css(get(p.theme.componentStyles.text, 'body1'))(p)}
  }

  body {
    background-color: ${p => p.theme.colors.white};
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
