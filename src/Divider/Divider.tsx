import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled, { css } from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import { baseStyle, variant, withColorMode } from '../util';

export interface DividerProps extends SpaceProps, WidthProps {
  /** Orientation of the divider. */
  orientation?: 'horizontal' | 'vertical';
}

const shouldForwardProp = createShouldForwardProp([...props, 'orientation']);

const Divider = styled('div').withConfig<DividerProps>({ shouldForwardProp })((p) =>
  css({
    ...withColorMode(baseStyle('components.Divider'))(p),
    ...withColorMode(variant('components.Divider', 'orientation'))(p),
    ...width(p),
    ...space(p),
  }),
);

Divider.defaultProps = {
  orientation: 'horizontal',
};

Divider.displayName = 'Divider';

export { Divider };
