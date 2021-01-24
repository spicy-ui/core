import * as CSS from 'csstype';
import { Config, RequiredTheme, ResponsiveValue, system, Theme } from 'styled-system';

export interface TransitionProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The transition CSS property is a shorthand property for `transition-property`,
   * `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
   */
  transition?: ResponsiveValue<CSS.Property.Transition, ThemeType>;
  /**
   * The `transition-property` CSS property sets the CSS properties to which a transition effect
   * should be applied.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
   */
  transitionProperty?: ResponsiveValue<CSS.Property.TransitionProperty, ThemeType>;
  /**
   * The transition-duration CSS property sets the length of time a transition animation should
   * take to complete.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
   */
  transitionDuration?: ResponsiveValue<CSS.Property.TransitionDuration, ThemeType>;
  /**
   * The transition-timing-function CSS property sets how intermediate values are calculated for CSS
   * properties being affected by a transition effect.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
   */
  transitionTiming?: ResponsiveValue<CSS.Property.TransitionTimingFunction, ThemeType>;
  /**
   * The transition-delay CSS property specifies the duration to wait before starting a property's
   * transition effect when its value changes.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)
   */
  transitionDelay?: ResponsiveValue<CSS.Property.TransitionDelay, ThemeType>;
}

const config: Config = {
  transition: true,
  transitionProperty: {
    property: 'transitionProperty',
    scale: 'transitions.property',
  },
  transitionDuration: {
    property: 'transitionDuration',
    scale: 'transitions.duration',
  },
  transitionTiming: {
    property: 'transitionTimingFunction',
    scale: 'transitions.timing',
  },
  transitionDelay: {
    property: 'transitionDelay',
    scale: 'transitions.delay',
  },
};

export const transition = system(config);

export const transitionProps = [
  'transition',
  'transitionProperty',
  'transitionDuration',
  'transitionTiming',
  'transitionDelay',
];
