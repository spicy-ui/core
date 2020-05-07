import { ColorProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export type TextVariant = 'body1' | 'body2' | 'lead';

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  /** Variant style of the text. */
  variant?: TextVariant;
}
