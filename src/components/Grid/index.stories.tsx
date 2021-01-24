import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Box, Grid, GridProps } from '..';

export default {
  title: 'Grid',
  component: Grid,
} as Meta<GridProps>;

export const Simple: Story<GridProps> = (props) => (
  <Grid {...props}>
    <Box p={2} bgColor="red.50">
      Box 1
    </Box>
    <Box p={2} bgColor="green.50">
      Box 2
    </Box>
    <Box p={2} bgColor="blue.50">
      Box 3
    </Box>
    <Box p={2} bgColor="orange.50">
      Box 4
    </Box>
    <Box p={2} bgColor="purple.50">
      Box 5
    </Box>
    <Box p={2} bgColor="pink.50">
      Box 6
    </Box>
  </Grid>
);
Simple.args = {
  gap: 4,
  templateColumns: 'repeat(6, 1fr)',
};
