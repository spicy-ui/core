import * as CSS from 'csstype';
import { Config, RequiredTheme, ResponsiveValue, system, Theme } from 'styled-system';

export interface FlexSystemProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The CSS `align-items` property sets the align-self value on all direct children as a
   * group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout,
   * it controls the alignment of items on the Block Axis within their grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   */
  align?: ResponsiveValue<CSS.Property.AlignItems, ThemeType>;
  /**
   * The CSS `justify-content` property defines how the browser distributes space between and around
   * content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   */
  justify?: ResponsiveValue<CSS.Property.JustifyContent, ThemeType>;
  /**
   * The `flex-wrap` CSS property sets whether flex items are forced onto one line or can wrap onto
   * multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
   */
  wrap?: ResponsiveValue<CSS.Property.FlexWrap, ThemeType>;
  /**
   * The `flex-direction` CSS property sets how flex items are placed in the flex container defining
   * the main axis and the direction (normal or reversed).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
   */
  direction?: ResponsiveValue<CSS.Property.FlexDirection, ThemeType>;
}

const config: Config = {
  align: {
    property: 'alignItems',
  },
  justify: {
    property: 'justifyContent',
  },
  wrap: {
    property: 'flexWrap',
  },
  direction: {
    property: 'flexDirection',
  },
};

export const flexSystem = system(config);

export const flexSystemProps = ['align', 'justify', 'wrap', 'direction'];
