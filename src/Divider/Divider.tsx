import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { Box, BoxProps } from '../Box';
import { useDividerStyle } from './styled';
import { DividerProps } from './types';

const shouldForwardProp = createShouldForwardProp([...props, 'orientation']);

const Divider = styled(Box).withConfig<BoxProps & DividerProps>({ shouldForwardProp })(useDividerStyle);

Divider.defaultProps = {
  as: 'hr',
  orientation: 'horizontal',
};

Divider.displayName = 'Divider';

export { Divider };
