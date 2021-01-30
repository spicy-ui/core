import { shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, AllSystemProps, getComponentScale, sx, SxProps } from '../../system';
import { LiteralUnion } from '../../types';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends AllSystemProps, SxProps {
  color?: string;
  /** Stack children. */
  children?: React.ReactNode;
  /** Text variant. */
  variant?: LiteralUnion<HeadingVariant>;
}

export const Heading = styled.p.withConfig<HeadingProps>({ shouldForwardProp })(
  getComponentScale('Heading.variants', 'variant'),
  allSystem,
  sx,
);

Heading.defaultProps = {
  variant: 'h2',
};

Heading.displayName = 'Heading';
