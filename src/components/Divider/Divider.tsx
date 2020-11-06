import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import { baseStyle, variant } from '../../helpers';

export interface DividerProps extends SpaceProps, WidthProps {
  /** Orientation of the divider. */
  orientation?: 'horizontal' | 'vertical';
}

const shouldForwardProp = createShouldForwardProp([...props, 'orientation']);

export const Divider = styled('div').withConfig<DividerProps>({ shouldForwardProp })`
  ${baseStyle('components.Divider')}
  ${variant('components.Divider', 'orientation')}
  ${width}
  ${space}
`;

Divider.defaultProps = {
  orientation: 'horizontal',
};
