import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps as SystemTypographyProps,
  variant,
} from 'styled-system';
import { system } from '../Theme/system';
import { space, SpaceProps } from '../util/space';

export interface HeadingProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  variant?: keyof typeof system.typeScale;
}

const Heading = styled('h2')<HeadingProps>`
  ${variant({ scale: 'typeScale' })}
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
