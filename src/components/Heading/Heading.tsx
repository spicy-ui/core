import styled from 'styled-components';
import {
  allSystem,
  AllSystemProps,
  getComponentScale,
  pseudoSystem,
  PseudoSystemProps,
  shouldForwardProp,
  sx,
  SxProp,
} from '../../system';
import { LiteralUnion } from '../types';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends AllSystemProps, PseudoSystemProps, SxProp {
  color?: string;
  /** Stack children. */
  children?: React.ReactNode;
  /** Text variant. */
  variant?: LiteralUnion<HeadingVariant>;
}

export const Heading = styled.p.withConfig<HeadingProps>({ shouldForwardProp })(
  allSystem,
  pseudoSystem,
  sx,
  getComponentScale('Heading.variants', 'variant'),
);

Heading.defaultProps = {
  variant: 'h2',
};

Heading.displayName = 'Heading';
