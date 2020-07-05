import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { baseStyle, variant, withColorMode } from '../util';

export type TextVariant = 'body1' | 'body2' | 'lead';

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  /** Variant style of the text. */
  variant?: TextVariant;
}

const Text = styled('p').withConfig<TextProps>({
  shouldForwardProp: createShouldForwardProp([...props, 'variant']),
})`
  ${withColorMode(baseStyle('components.Text'))}
  ${withColorMode(variant('components.Text'))}
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Text.defaultProps = {
  variant: 'body1',
};

Text.displayName = 'Text';

export { Text };
