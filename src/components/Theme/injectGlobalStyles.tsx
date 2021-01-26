import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { keyframeCss } from '../../theme/foundations/animations';

export const injectGlobalStyles = (additionalStyles?: string | ReturnType<typeof css>) => {
  const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${keyframeCss}

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: ${(p) => p.theme.colors.gray[200]};
      word-wrap: break-word;
    }

    *::placeholder {
      color: ${(p) => p.theme.colors.gray[400]};
    }
    
    html {
      background: ${(p) => p.theme.colors.white};
      color: ${(p) => p.theme.colors.gray[800]};
      font-family: ${(p) => p.theme.fonts.body};
      line-height: ${(p) => p.theme.lineHeights.normal};
    }

    hr {
      border-top-width: 1px;
    }

    img {
      border-style: solid;
    }

    textarea {
      resize: vertical;
    }

    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
      color: ${(p) => p.theme.colors.gray[400]};
    }

    input::-ms-input-placeholder, textarea::-ms-input-placeholder {
      color: ${(p) => p.theme.colors.gray[400]};
    }

    input::placeholder,
    textarea::placeholder {
      color: ${(p) => p.theme.colors.gray[400]};
    }

    button,
    [role="button"] {
      cursor: pointer;
    }

    table {
      border-collapse: collapse;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }

    pre,
    code,
    kbd,
    samp {
      font-family: ${(p) => p.theme.fonts.mono};
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }

    img,
    video {
      max-width: 100%;
      height: auto;
    }

    ${additionalStyles};
  `;

  return { GlobalStyle };
};
