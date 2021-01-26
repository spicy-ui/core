import styled from 'styled-components';
import { allSystem, gridUtil, gridUtilProps, GridUtilProps, pseudoSystem, sfp } from '../../system';
import { BoxProps } from '../Box';

export interface GridProps extends BoxProps, GridUtilProps {}

export const Grid = styled.div.withConfig<GridProps>({ shouldForwardProp: sfp(gridUtilProps) })(
  allSystem,
  pseudoSystem,
  gridUtil,
);

Grid.defaultProps = {
  display: 'grid',
};

Grid.displayName = 'Grid';
