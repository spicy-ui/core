import * as CSS from 'csstype';
import { Config, RequiredTheme, ResponsiveValue, system, Theme } from 'styled-system';

export interface TransformProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The transform CSS property lets you rotate, scale, skew, or translate an element.
   * It modifies the coordinate space of the CSS visual formatting model.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
   */
  transform?: ResponsiveValue<CSS.Property.Transform, ThemeType>;
  /**
   * The transform-origin CSS property sets the origin for an element's transformations.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
   */
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin, ThemeType>;
}

const config: Config = {
  transform: true,
  transformOrigin: true,
};

export const transform = system(config);

export const transformProps = ['transform', 'transformOrigin'];
