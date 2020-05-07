import styled from 'styled-components';
import { Box } from '../Box';
import { useDividerStyle } from './styled';
import { DividerProps } from './types';

const Divider = styled(Box)<DividerProps>(useDividerStyle);

Divider.defaultProps = {
  as: 'hr',
  orientation: 'horizontal',
};

Divider.displayName = 'Divider';

export { Divider };
