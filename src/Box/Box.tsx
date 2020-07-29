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
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export interface BoxProps
  extends LayoutProps,
    PositionProps,
    FlexboxProps,
    GridProps,
    SpaceProps,
    BackgroundProps,
    Omit<ColorProps, 'color'>,
    TypographyProps,
    BorderProps,
    ShadowProps {}

export const boxMixin = compose(layout, position, flexbox, grid, space, background, color, typography, border, shadow);

const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })`
  ${boxMixin}
`;

Box.displayName = 'Box';

export { Box };
