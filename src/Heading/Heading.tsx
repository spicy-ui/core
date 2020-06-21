import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';
import { variant } from '../util';
import { HeadingProps } from './types';

const shouldForwardProp = createShouldForwardProp([...props, 'variant']);

const Heading = styled('h2').withConfig<HeadingProps>({ shouldForwardProp })`
  ${variant({ scale: 'componentStyles' })}
  ${layout}
  ${space}
  ${color}
  ${typography}
`;

Heading.defaultProps = {
  variant: 'h2',
};

Heading.displayName = 'Heading';

export { Heading };
