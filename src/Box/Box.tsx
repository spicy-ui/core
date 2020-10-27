import shouldForwardProp from '@styled-system/should-forward-prop';
import * as CSS from 'csstype';
import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  RequiredTheme,
  ResponsiveValue,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export interface BoxProps
  extends LayoutProps,
    Omit<PositionProps, 'zIndex'>,
    FlexboxProps,
    GridProps,
    SpaceProps,
    BackgroundProps,
    Omit<ColorProps, 'color'>,
    TypographyProps,
    BorderProps,
    ShadowProps {
  /**
   * The z-index CSS property sets the z-order of a positioned element and its descendants or
   * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
   */
  zIndex?: ResponsiveValue<CSS.Property.ZIndex | string, RequiredTheme>;
}

export const boxMixin = compose(layout, position, flexbox, grid, space, background, color, typography, border, shadow);

const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })`
  ${boxMixin}
`;

Box.displayName = 'Box';

export { Box };
