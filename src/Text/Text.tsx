import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps as SystemTypographyProps,
  variant,
} from 'styled-system';
import { system } from '../Theme/system';
import { space, SpaceProps } from '../util/space';

export interface TextProps extends LayoutProps, SpaceProps, ColorProps, SystemTypographyProps {
  variant?: keyof typeof system.typeScale;
}

const Text = styled('p')<TextProps>(variant({ scale: 'typeScale' }), layout, space, color, typography);

Text.defaultProps = {
  variant: 'body1',
};

Text.displayName = 'Text';

export default Text;
