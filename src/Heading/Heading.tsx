import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled, { css } from 'styled-components';
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { baseStyle, variant, withColorMode } from '../util';

export interface HeadingProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  /** Variant style of the heading. */
  variant?: string;
}

const Heading = styled('h2').withConfig<HeadingProps>({
  shouldForwardProp: createShouldForwardProp([...props, 'variant']),
})((p) =>
  css({
    ...withColorMode(baseStyle('components.Heading'))(p),
    ...withColorMode(variant('components.Heading'))(p),
    ...layout(p),
    ...space(p),
    ...color(p),
    ...typography(p),
  }),
);

Heading.defaultProps = {
  variant: 'h2',
};

Heading.displayName = 'Heading';

export { Heading };
