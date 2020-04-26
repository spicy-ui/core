import * as React from 'react';
import { Box } from '../Box';
import { GridProps } from './types';

const Grid: React.FC<GridProps> = ({
  gap,
  rowGap,
  columnGap,
  autoFlow,
  autoRows,
  autoColumns,
  templateRows,
  templateColumns,
  templateAreas,
  area,
  column,
  row,
  ...rest
}) => (
  <Box
    display="grid"
    gridGap={gap}
    gridRowGap={rowGap}
    gridColumnGap={columnGap}
    gridAutoFlow={autoFlow}
    gridAutoRows={autoRows}
    gridAutoColumns={autoColumns}
    gridTemplateRows={templateRows}
    gridTemplateColumns={templateColumns}
    gridTemplateAreas={templateAreas}
    gridArea={area}
    gridColumn={column}
    gridRow={row}
    {...rest}
  />
);

Grid.displayName = 'Grid';

export { Grid };
