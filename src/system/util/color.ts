import * as CSS from 'csstype';
import {
  ColorProps as _ColorProps,
  Config,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  ThemeValue,
} from 'styled-system';

export interface ColorProps<ThemeType extends Theme = RequiredTheme>
  extends Omit<_ColorProps<ThemeType>, 'bg' | 'color'> {
  /**
   * The color utility parses a component's `color` prop and converts it into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   */
  color?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
  /**
   * The color utility parses a component's `backgroundColor` prop and converts it into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   */
  backgroundColor?: ResponsiveValue<ThemeValue<'colors', ThemeType>, ThemeType>;
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
  /**
   * The opacity CSS property sets the transparency of an element or the degree to which content
   * behind an element is visible.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
   */
  opacity?: ResponsiveValue<CSS.Property.Opacity, ThemeType>;
}

const config: Config = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
};
config.bgColor = config.backgroundColor;

export const color = system(config);

export const colorProps = ['color', 'backgroundColor', 'bgColor', 'opacity'];
