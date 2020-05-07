import styled from 'styled-components';
import { background, border, color, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system';
import { BoxProps } from './types';

const Box = styled('div')<BoxProps>`
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
