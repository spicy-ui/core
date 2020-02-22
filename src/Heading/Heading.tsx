import styled from 'styled-components';
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { variant } from '../util';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  /** Variant style of the heading. */
  variant?: HeadingVariant;
}

const Heading = styled('h2')<HeadingProps>`
  ${variant({ scale: 'componentStyles' })}
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Heading.defaultProps = {
  variant: 'h2',
};

Heading.displayName = 'Heading';

export default Heading;
