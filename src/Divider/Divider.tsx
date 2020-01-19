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
  typography,
  TypographyProps,
} from 'styled-system';
import { variant } from '../util';

const variants = {
  vertical: {
    height: 'auto',
    mx: 'sm',
    border: 0,
    borderColor: 'inherit',
    borderLeft: '1px solid',
    color: 'gray.300',
    opacity: 0.6,
  },
  horizontal: {
    width: 'auto',
    my: 'sm',
    border: 0,
    borderColor: 'inherit',
    borderBottom: '1px solid',
    color: 'gray.300',
    opacity: 0.6,
  },
};

export interface DividerProps
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
  orientation?: 'horizontal' | 'vertical';
}

const Divider = styled('hr')<DividerProps>`
  ${variant({ prop: 'orientation', variants })}
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

Divider.defaultProps = {
  orientation: 'horizontal',
};

Divider.displayName = 'Divider';

export default Divider;
