import { shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, AllSystemProps, componentStylesMixin, sxMixin, SxProp } from '../../system';
import { AsProp, ChildrenProp, LiteralUnion } from '../../types';

export type TextVariant =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export interface TextProps extends AsProp, ChildrenProp, AllSystemProps, SxProp {
  color?: string;
  /** Variant of the text. */
  variant?: LiteralUnion<TextVariant>;
}

export const Text = styled.p.withConfig<TextProps>({ shouldForwardProp })(
  componentStylesMixin('Text'),
  sxMixin,
  allSystem,
);

Text.defaultProps = {
  variant: 'md',
};

Text.displayName = 'Text';
