import css from '@styled-system/css';
import styled from 'styled-components';
import { color, get, layout, space, typography } from 'styled-system';
import { LinkProps } from './types';

const Link = styled('a')<LinkProps>`
  ${(p) => css(get(p.theme.componentStyles, 'a'))(p)}
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Link.defaultProps = {};

Link.displayName = 'Link';

export { Link };

