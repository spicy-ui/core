import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TextColorProps,
  TypographyProps,
} from 'styled-system';

export interface BoxProps
  extends LayoutProps,
    PositionProps,
    FlexboxProps,
    GridProps,
    SpaceProps,
    BackgroundProps,
    ColorProps,
    TypographyProps,
    BorderProps,
    ShadowProps {
  /**
   * Styled components `as` polymorphic prop.
   *
   * [`styled-components` docs](https://styled-components.com/docs/api#as-polymorphic-prop)
   */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /**
   * Extended color prop.
   */
  color?: TextColorProps['color'];
}
