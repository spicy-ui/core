import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { baseStyle, variant, withColorMode } from '../util';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  /** Variant style of the heading. */
  variant?: HeadingVariant;
}

const Heading = styled('h2').withConfig<HeadingProps>({
  shouldForwardProp: createShouldForwardProp([...props, 'variant']),
})`
  ${withColorMode(baseStyle('components.Heading'))}
  ${withColorMode(variant('components.Heading'))}
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Heading.defaultProps = {
  variant: 'h2',
};

Heading.displayName = 'Heading';

export { Heading };
