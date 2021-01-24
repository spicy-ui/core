import * as CSS from 'csstype';
import {
  background as _background,
  BackgroundProps as _BackgroundProps,
  compose,
  Config,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  TLengthStyledSystem,
} from 'styled-system';

export interface BackgroundProps<ThemeType extends Theme = RequiredTheme> extends _BackgroundProps<ThemeType> {
  /**
   * The background shorthand CSS property sets all background style properties at once,
   * such as color, image, origin and size, repeat method, and others.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
   */
  bg?: ResponsiveValue<CSS.Property.Background<TLengthStyledSystem>, ThemeType>;
  /**
   * The background-image CSS property sets one or more background images on an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
   */
  bgImage?: ResponsiveValue<CSS.Property.BackgroundImage, ThemeType>;
  /**
   * The background-size CSS property sets the size of the element's background image. The
   * image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
   */
  bgSize?: ResponsiveValue<CSS.Property.BackgroundSize<TLengthStyledSystem>, ThemeType>;
  /**
   * The background-position CSS property sets the initial position for each background image. The
   * position is relative to the position layer set by background-origin.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
   */
  bgPosition?: ResponsiveValue<CSS.Property.BackgroundPosition<TLengthStyledSystem>, ThemeType>;
  /**
   * The background-repeat CSS property sets how background images are repeated. A background
   * image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
   */
  bgRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat, ThemeType>;
  /**
   * The background-attachment CSS property sets whether a background image's position is fixed
   * within the viewport, or scrolls with its containing block.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
   */
  backgroundAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment, ThemeType>;
  /**
   * The background-attachment CSS property sets whether a background image's position is fixed
   * within the viewport, or scrolls with its containing block.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
   */
  bgAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment, ThemeType>;
}

const config: Config = {
  bg: {
    property: 'background',
  },
  bgImage: {
    property: 'backgroundImage',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgPosition: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  backgroundAttachment: {
    property: 'backgroundAttachment',
  },
};
config.bgAttachment = config.backgroundAttachment;

export const background = compose(_background, system(config));

export const backgroundProps = [
  'bg',
  'bgImage',
  'bgSize',
  'bgPosition',
  'bgRepeat',
  'backgroundAttachment',
  'bgAttachment',
];
