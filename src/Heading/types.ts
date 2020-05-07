import { ColorProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  /** Variant style of the heading. */
  variant?: HeadingVariant;
}
