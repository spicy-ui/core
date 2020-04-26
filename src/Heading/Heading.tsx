import styled from 'styled-components';
import { color, layout, space, typography } from 'styled-system';
import { variant } from '../util';
import { HeadingProps } from './types';

const Heading = styled('h2')<HeadingProps>`
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
