import { CSSObject } from '@styled-system/css';
import { colorMode } from '../../util';

export const styles = {
  global: (props: any): CSSObject => ({
    '*, *:before, *:after': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },
    html: {
      boxSizing: 'border-box',
      color: colorMode('gray.800', 'white')(props),
      fontFamily: 'body',
      lineHeight: 'normal',
    },
    body: {
      bg: colorMode('white', 'gray.800')(props),
    },
    a: {
      textDecoration: 'none',
      ':hover,:focus': {
        textDecoration: 'underline',
      },
    },
    'code, kbd, samp': {
      fontFamily: 'mono',
      fontSize: 'md',
      fontWeight: 'normal',
    },
    pre: {
      fontFamily: 'mono',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    '.noscroll': {
      overflow: 'hidden',
      '@media (min-device-width: 1025px)': {
        /* Prevent reflow when scrollbar disappears on some OS (e.g. Windows) */
        pr: '17px',
      },
    },
  }),
};
