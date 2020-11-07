import * as React from 'react';
import {
  GridAreaProps,
  GridAutoColumnsProps,
  GridAutoFlowProps,
  GridAutoRowsProps,
  GridColumnGapProps,
  GridColumnProps,
  GridGapProps,
  GridRowGapProps,
  GridRowProps,
  GridTemplateAreasProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
} from 'styled-system';
import { Box, BoxProps } from '../Box';

export interface GridProps extends BoxProps {
  /** Shorthand for styled-system `gridGap` prop. */
  gap?: GridGapProps['gridGap'];
  /** Shorthand for styled-system `gridRowGap` prop. */
  rowGap?: GridRowGapProps['gridRowGap'];
  /** Shorthand for styled-system `gridColumnGap` prop. */
  columnGap?: GridColumnGapProps['gridColumnGap'];
  /** Shorthand for styled-system `gridAutoFlow` prop. */
  autoFlow?: GridAutoFlowProps['gridAutoFlow'];
  /** Shorthand for styled-system `gridAutoRows` prop. */
  autoRows?: GridAutoRowsProps['gridAutoRows'];
  /** Shorthand for styled-system `gridAutoColumns` prop. */
  autoColumns?: GridAutoColumnsProps['gridAutoColumns'];
  /** Shorthand for styled-system `gridTemplateRows` prop. */
  templateRows?: GridTemplateRowsProps['gridTemplateRows'];
  /** Shorthand for styled-system `gridTemplateColumns` prop. */
  templateColumns?: GridTemplateColumnsProps['gridTemplateColumns'];
  /** Shorthand for styled-system `gridTemplateAreas` prop. */
  templateAreas?: GridTemplateAreasProps['gridTemplateAreas'];
  /** Shorthand for styled-system `gridArea` prop. */
  area?: GridAreaProps['gridArea'];
  /** Shorthand for styled-system `gridColumn` prop. */
  column?: GridColumnProps['gridColumn'];
  /** Shorthand for styled-system `gridRow` prop. */
  row?: GridRowProps['gridRow'];
}

export const Grid: React.FC<GridProps> = ({
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
