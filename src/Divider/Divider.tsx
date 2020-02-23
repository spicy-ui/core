import styled from 'styled-components';
import { Box, BoxProps } from '../Box';
import { useDividerStyle } from './styled';

export interface DividerProps extends BoxProps {
  /** Orientation of the divider. */
  orientation?: 'horizontal' | 'vertical';
}

const Divider = styled(Box)<DividerProps>(useDividerStyle);

Divider.defaultProps = {
  as: 'hr',
  orientation: 'horizontal',
};

Divider.displayName = 'Divider';

export default Divider;
