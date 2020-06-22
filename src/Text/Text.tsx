import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';
import { variant } from '../util';
import { TextProps } from './types';

const shouldForwardProp = createShouldForwardProp([...props, 'variant']);

const Text = styled('p').withConfig<TextProps>({ shouldForwardProp })`
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
