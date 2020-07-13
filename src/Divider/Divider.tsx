import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled, { css } from 'styled-components';
import { Box, BoxProps } from '../Box';
import { baseStyle, variant, withColorMode } from '../util';

export interface DividerProps extends BoxProps {
  /** Orientation of the divider. */
  orientation?: 'horizontal' | 'vertical';
}

const Divider = styled(Box).withConfig<BoxProps & DividerProps>({
  shouldForwardProp: createShouldForwardProp([...props, 'orientation']),
})((p) =>
  css({
    ...withColorMode(baseStyle('components.Divider'))(p),
    ...withColorMode(variant('components.Divider', 'orientation'))(p),
  }),
);

Divider.defaultProps = {
  as: 'hr',
  orientation: 'horizontal',
};

Divider.displayName = 'Divider';

export { Divider };
