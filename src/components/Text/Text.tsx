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

export interface TextProps extends Omit<ColorProps, 'color'>, LayoutProps, SpaceProps, TypographyProps {
  /** Color of the text. */
  color?: ResponsiveValue<string>;
  /** Variant style of the text. */
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, 'variant']);

export const Text = styled('p').withConfig<TextProps>({ shouldForwardProp })`
  ${baseStyle('components.Text')}
  ${variant('components.Text')}
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

Text.defaultProps = {
  variant: 'md',
};
