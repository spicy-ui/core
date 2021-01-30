import { extendedGrid, ExtendedGridProps, shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, sx } from '../../system';
import { BoxProps } from '../Box';

export interface GridProps extends BoxProps, ExtendedGridProps {}

export const Grid = styled.div.withConfig<GridProps>({ shouldForwardProp })(allSystem, extendedGrid, sx);

Grid.defaultProps = {
  display: 'grid',
};

Grid.displayName = 'Grid';
