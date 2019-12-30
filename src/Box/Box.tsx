import * as React from 'react';
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
    ColorProps,
    TypographyProps,
    BorderProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
}

/**
 * Box is a view with all styled-system hooks added to it. You can use it as a base component for all display elements.
 */
const Box = styled.div<BoxProps>`
  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${background}
  ${color}
  ${typography}
  ${border}
`;

Box.displayName = 'Box';

export default Box;
