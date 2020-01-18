import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const Baseline = createGlobalStyle`
  ${styledNormalize}

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    color: ${p => p.theme.colors.gray[900]};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.base};
    line-height: ${p => p.theme.lineHeights.body};
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

    &:hover, &:focus {
      text-decoration: underline;
    }
  }

  strong {
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.medium};
  }

  small {
    font-size: ${p => p.theme.fontSizes.xs};
    font-weight: ${p => p.theme.fontWeights.normal};
  }
`;
