import { shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, AllSystemProps, getComponentStyles, sxMixin, SxProps } from '../../system';
import { LiteralUnion } from '../../types';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends AllSystemProps, SxProps {
  color?: string;
  children?: React.ReactNode;
  /** Text variant. */
  variant?: LiteralUnion<HeadingVariant>;
}

export const Heading = styled.p.withConfig<HeadingProps>({ shouldForwardProp })(
  getComponentStyles('Heading'),
  allSystem,
  sxMixin,
);

Heading.defaultProps = {
  variant: 'h2',
};

Heading.displayName = 'Heading';
