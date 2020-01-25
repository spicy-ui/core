import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps as SystemTypographyProps,
} from 'styled-system';
import { variant } from '../util';

export type TextVariant = 'body1' | 'body2' | 'lead';

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  /** Variant style of the text. */
  variant?: TextVariant;
}

const Text = styled('p')<TextProps>`
  ${variant({ scale: 'componentStyles.text' })}
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Text.defaultProps = {
  variant: 'body1',
};

Text.displayName = 'Text';

export default Text;
