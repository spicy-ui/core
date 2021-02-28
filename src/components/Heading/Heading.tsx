import { shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, AllSystemProps, componentStylesMixin, sxMixin, SxProp } from '../../system';
import { AsProp, ChildrenProp, LiteralUnion } from '../../types';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends AsProp, ChildrenProp, AllSystemProps, SxProp {
  color?: string;
  /** Variant of the heading. */
  variant?: LiteralUnion<HeadingVariant>;
}

export const Heading = styled.h2.withConfig<HeadingProps>({ shouldForwardProp })(
  componentStylesMixin('Heading'),
  sxMixin,
  allSystem,
);

Heading.defaultProps = {
  variant: 'h2',
};

Heading.displayName = 'Heading';
