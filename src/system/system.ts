import {
  animation,
  AnimationProps,
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
  other,
  OtherProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  transition,
  TransitionProps,
  typography,
  TypographyProps,
} from '@spicy-ui/styled-system';

export type AllSystemProps = AnimationProps &
  BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  OtherProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TransitionProps &
  TypographyProps;

export const allSystem = compose(
  animation,
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  other,
  position,
  shadow,
  space,
  transition,
  typography,
);
