import {
  color as _color,
  ColorProps as _ColorProps,
  compose,
  Config,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  ThemeValue,
} from 'styled-system';

export interface ColorProps<ThemeType extends Theme = RequiredTheme> extends _ColorProps<ThemeType> {
  /**
   * The color utility parses a component's `bgColor` prop and converts it into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   */
  bgColor?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
}

const config: Config = {
  bgColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
};

export const color = compose(_color, system(config));

export const colorProps = ['bgColor'];
