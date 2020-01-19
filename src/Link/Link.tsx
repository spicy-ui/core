import css from '@styled-system/css';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  get,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export interface LinkProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {}

const Link = styled('a')<LinkProps>`
  ${p => css(get(p.theme.textStyle, 'a'))(p)}
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Link.defaultProps = {};

Link.displayName = 'Link';

export default Link;
