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

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  variant?: 'body1' | 'body2' | 'lead';
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
