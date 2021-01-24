import styled from 'styled-components';
import { allSystemProps, pseudoSystemProps, sfp } from '../../system';
import { BoxProps } from '../Box';
import { gridComponent, gridComponentProps, GridComponentProps } from './util';

export interface GridProps extends BoxProps, GridComponentProps {}

export const Grid = styled.div.withConfig<GridProps>({ shouldForwardProp: sfp(gridComponentProps) })(
  allSystemProps,
  pseudoSystemProps,
  gridComponent,
);

Grid.defaultProps = {
  display: 'grid',
};

Grid.displayName = 'Grid';
