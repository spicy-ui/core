import styled from 'styled-components';
import { allSystem, pseudoSystem, sfp } from '../../system';
import { BoxProps } from '../Box';
import { gridSystem, gridSystemProps, GridSystemProps } from './system';

export interface GridProps extends BoxProps, GridSystemProps {}

export const Grid = styled.div.withConfig<GridProps>({ shouldForwardProp: sfp(gridSystemProps) })(
  allSystem,
  pseudoSystem,
  gridSystem,
);

Grid.defaultProps = {
  display: 'grid',
};

Grid.displayName = 'Grid';
