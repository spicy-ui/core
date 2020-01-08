import { colors } from './colors';

export const buttons = {
  variants: {
    solid: {},
    outline: {},
    ghost: {},
    link: {},
  },
  colors: {
    transparent: {
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
      color: colors.text.base,
    },
    black: {
      backgroundColor: colors.black,
      borderColor: colors.black,
      color: colors.text.inverse,
    },
    white: {
      backgroundColor: colors.white,
      borderColor: colors.white,
      color: colors.text.base,
    },
    gray: {
      backgroundColor: colors.gray[500],
      borderColor: colors.gray[500],
      color: colors.text.inverse,
    },
    red: {
      backgroundColor: colors.red[500],
      borderColor: colors.red[500],
      color: colors.text.inverse,
    },
    orange: {
      backgroundColor: colors.orange[500],
      borderColor: colors.orange[500],
      color: colors.text.inverse,
    },
    yellow: {
      backgroundColor: colors.yellow[500],
      borderColor: colors.yellow[500],
      color: colors.text.base,
    },
    green: {
      backgroundColor: colors.green[500],
      borderColor: colors.green[500],
      color: colors.text.inverse,
    },
    teal: {
      backgroundColor: colors.teal[500],
      borderColor: colors.teal[500],
      color: colors.text.base,
    },
    blue: {
      backgroundColor: colors.blue[500],
      borderColor: colors.blue[500],
      color: colors.text.inverse,
    },
    cyan: {
      backgroundColor: colors.cyan[500],
      borderColor: colors.cyan[500],
      color: colors.text.base,
    },
    purple: {
      backgroundColor: colors.purple[500],
      borderColor: colors.purple[500],
      color: colors.text.inverse,
    },
    pink: {
      backgroundColor: colors.pink[500],
      borderColor: colors.pink[500],
      color: colors.text.inverse,
    },
  },
  sizes: {
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  },
};
