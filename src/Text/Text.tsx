import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';
import { variant } from '../util';
import { TextProps } from './types';

const Text = styled('p')<TextProps>`
  ${variant({ scale: 'componentStyles' })}
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Text.defaultProps = {
  variant: 'body1',
};

Text.displayName = 'Text';

export { Text };
