import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  ResponsiveValue,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { baseStyle, variant } from '../../helpers';

export interface HeadingProps extends Omit<ColorProps, 'color'>, LayoutProps, SpaceProps, TypographyProps {
  /** Color of the text. */
  color?: ResponsiveValue<string>;
  /** Variant style of the text. */
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, 'variant']);

export const Heading = styled('h2').withConfig<HeadingProps>({ shouldForwardProp })`
  ${baseStyle('components.Heading')}
  ${variant('components.Heading')}
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

Heading.defaultProps = {
  variant: 'h2',
};
