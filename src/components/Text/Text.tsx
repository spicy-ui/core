import { shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, AllSystemProps, getComponentStyles, sxMixin, SxProps } from '../../system';
import { LiteralUnion } from '../../types';

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

export interface TextProps extends AllSystemProps, SxProps {
  color?: string;
  /** Stack children. */
  children?: React.ReactNode;
  /** Text variant. */
  variant?: LiteralUnion<TextVariant>;
}

export const Text = styled.p.withConfig<TextProps>({ shouldForwardProp })(
  getComponentStyles('Text'),
  allSystem,
  sxMixin,
);

Text.defaultProps = {
  variant: 'md',
};

Text.displayName = 'Text';
