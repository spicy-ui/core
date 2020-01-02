import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const Baseline = createGlobalStyle`
  ${styledNormalize}

  * {
    margin: 0;
    padding: 0;
  }

  html {
    color: ${p => p.theme.colors.gray[700]};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.body1};
    line-height: ${p => p.theme.lineHeights.body1};
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${p => p.theme.colors.gray[50]};
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
    color: ${p => p.theme.colors.gray[900]};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.medium};
  }

  small {
    font-size: ${p => p.theme.fontSizes.small};
    font-weight: ${p => p.theme.fontWeights.normal};
  }
`;
