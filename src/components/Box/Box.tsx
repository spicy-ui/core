import shouldForwardProp from '@styled-system/should-forward-prop';
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
  ResponsiveValue,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    Omit<ColorProps, 'color'>,
    FlexboxProps,
    GridProps,
    LayoutProps,
    Omit<PositionProps, 'zIndex'>,
    ShadowProps,
    SpaceProps,
    TextAlignProps {
  /** Box zIndex. */
  zIndex?: ResponsiveValue<string>;
}

export const boxMixin = compose(background, border, color, flexbox, grid, layout, position, shadow, space, textAlign);

export const Box = styled('div').withConfig<BoxProps>({ shouldForwardProp })`
  ${boxMixin}
`;
