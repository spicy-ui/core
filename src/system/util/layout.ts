import * as CSS from 'csstype';
import {
  compose,
  Config,
  get,
  layout as _layout,
  LayoutProps as _LayoutProps,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  TLengthStyledSystem,
} from 'styled-system';

export interface LayoutProps<ThemeType extends Theme = RequiredTheme> extends _LayoutProps<ThemeType> {
  /**
   *   The width utility parses a component's `width` prop and converts it into a CSS width declaration.
   *
   *   - Numbers from 0-1 are converted to percentage widths.
   *   - Numbers greater than 1 are converted to pixel values.
   *   - String values are passed as raw CSS values.
   *   - And arrays are converted to responsive width styles.
   */
  w?: ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, ThemeType>;
  /**
   * The height CSS property specifies the height of an element. By default, the property defines the height of the
   * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
   */
  h?: ResponsiveValue<CSS.Property.Height<TLengthStyledSystem>, ThemeType>;
  /**
   * The min-width CSS property sets the minimum width of an element.
   * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
   */
  minW?: ResponsiveValue<CSS.Property.MinWidth<TLengthStyledSystem>, ThemeType>;
  /**
   * The max-width CSS property sets the maximum width of an element.
   * It prevents the used value of the width property from becoming larger than the value specified by max-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
   */
  maxW?: ResponsiveValue<CSS.Property.MaxWidth<TLengthStyledSystem>, ThemeType>;
  /**
   * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
   * property from becoming smaller than the value specified for min-height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   */
  minH?: ResponsiveValue<CSS.Property.MinHeight<TLengthStyledSystem>, ThemeType>;
  /**
   * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
   * property from becoming larger than the value specified for max-height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
   */
  maxH?: ResponsiveValue<CSS.Property.MaxHeight<TLengthStyledSystem>, ThemeType>;
  /**
   * The display CSS property defines the display type of an element, which consists of the two basic qualities
   * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
   * and the inner display type defining how the children of the box are laid out.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   */
  d?: ResponsiveValue<CSS.Property.Display, ThemeType>;
}

// eslint-disable-next-line no-restricted-globals
const isNumber = (n: any) => typeof n === 'number' && !isNaN(n);
const getWidth = (n: any, scale: any) => get(scale, n, !isNumber(n) || n > 1 ? n : `${n * 100}%`);

const config: Config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  d: {
    property: 'display',
  },
};

config.w = config.width;
config.h = config.height;
config.minW = config.height;
config.maxW = config.height;
config.minH = config.height;
config.maxH = config.height;

export const layout = compose(_layout, system(config));

export const layoutProps = ['w', 'h', 'minW', 'maxW', 'minH', 'maxH', 'd'];
