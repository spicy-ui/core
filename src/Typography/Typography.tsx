import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps as StyledTypographyProps,
} from 'styled-system';

export interface TypographyProps extends LayoutProps, SpaceProps, ColorProps, StyledTypographyProps {
  /** Unique ID attribute */
  id?: string;
  /** Extended color props. */
  color?: string;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
const Typography = styled.p<TypographyProps>`
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Typography.displayName = 'Typography';

export default Typography;
