import * as CSS from 'csstype';
import {
  compose,
  Config,
  position as _position,
  PositionProps as _PositionProps,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
} from 'styled-system';

export interface PositionProps<ThemeType extends Theme = RequiredTheme> extends _PositionProps<ThemeType> {
  /**
   * The position CSS property specifies how an element is positioned in a document.
   * The top, right, bottom, and left properties determine the final location of positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
   */
  pos?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  /**
   * The z-index CSS property sets the z-order of a positioned element and its descendants or
   * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
   */
  zIndex?: ResponsiveValue<CSS.Property.ZIndex & string, ThemeType>;
}

const config: Config = {
  pos: {
    property: 'position',
  },
};

export const position = compose(_position, system(config));

export const positionProps = ['pos', 'zIndex'];
