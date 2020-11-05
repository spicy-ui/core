import * as React from 'react';
import { Box, Grid } from '..';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    gap: {
      control: { type: 'text' },
    },
    rowGap: {
      control: { type: 'text' },
    },
    columnGap: {
      control: { type: 'text' },
    },
    autoFlow: {
      control: { type: 'text' },
    },
    autoRows: {
      control: { type: 'text' },
    },
    autoColumns: {
      control: { type: 'text' },
    },
    templateRows: {
      control: { type: 'text' },
    },
    templateColumns: {
      control: { type: 'text' },
    },
    templateAreas: {
      control: { type: 'text' },
    },
    area: {
      control: { type: 'text' },
    },
    column: {
      control: { type: 'text' },
    },
    row: {
      control: { type: 'text' },
    },
    zIndex: { table: { disable: true } },
  },
};

export const Simple = (props: any) => (
  <Grid {...props}>
    <Box p={2} bg="red.50">
      Box 1
    </Box>
    <Box p={2} bg="green.50">
      Box 2
    </Box>
    <Box p={2} bg="blue.50">
      Box 3
    </Box>
    <Box p={2} bg="orange.50">
      Box 4
    </Box>
    <Box p={2} bg="purple.50">
      Box 5
    </Box>
    <Box p={2} bg="pink.50">
      Box 6
    </Box>
  </Grid>
);
Simple.args = {
  gap: 'base',
  templateColumns: 'repeat(6, 1fr)',
};
