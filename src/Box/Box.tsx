import shouldForwardProp from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
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
  TextColorProps,
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
    ColorProps,
    TypographyProps,
    BorderProps,
    ShadowProps {
  /**
   * Styled components's `as` polymorphic prop.
   *
   * [`styled-components` docs](https://styled-components.com/docs/api#as-polymorphic-prop)
   */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /**
   * Extended color prop.
   */
  color?: TextColorProps['color'];
}

const Box = styled('div').withConfig<BoxProps>({ shouldForwardProp })`
  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${background}
  ${color}
  ${typography}
  ${border}
  ${shadow}
`;

Box.displayName = 'Box';

export { Box };
