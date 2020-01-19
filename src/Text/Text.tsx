import styled, { DefaultTheme } from 'styled-components';
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
import variant from '../util/variant';

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  variant?: keyof DefaultTheme['textStyle'];
}

const Text = styled('p')<TextProps>`
  ${variant({ scale: 'textStyle' })}
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
