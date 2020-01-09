import styled, { DefaultTheme } from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps as SystemTypographyProps,
} from 'styled-system';
import { space, SpaceProps } from '../util/space';
import variant from '../util/variant';

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  variant?: keyof DefaultTheme['typeScale'];
}

const Text = styled('p')<TextProps>`
  ${variant({ scale: 'typeScale' })}
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
