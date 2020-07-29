import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled, { css } from 'styled-components';
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { baseStyle, variant, withColorMode } from '../util';

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  /** Variant style of the text. */
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, 'variant']);

const Text = styled('p').withConfig<TextProps>({ shouldForwardProp })((p) =>
  css({
    ...withColorMode(baseStyle('components.Text'))(p),
    ...withColorMode(variant('components.Text'))(p),
    ...layout(p),
    ...space(p),
    ...color(p),
    ...typography(p),
  }),
);

Text.defaultProps = {
  variant: 'body1',
};

Text.displayName = 'Text';

export { Text };
