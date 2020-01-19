import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps as SystemTypographyProps,
} from 'styled-system';
import { variant } from '../util';

export interface HeadingProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = styled('h2')<HeadingProps>`
  ${variant({ scale: 'componentStyles.text' })}
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
