import * as React from 'react';
import { Box } from '../Box';
import Grid from './Grid';

export default {
  title: 'Grid',
  component: Grid,
};

export const Simple = () => (
  <Grid gap="base" templateColumns="repeat(6, 1fr)">
    <Box bg="red.50">Box 1</Box>
    <Box bg="green.50">Box 2</Box>
    <Box bg="blue.50">Box 3</Box>
    <Box bg="orange.50">Box 4</Box>
    <Box bg="purple.50">Box 5</Box>
    <Box bg="pink.50">Box 6</Box>
  </Grid>
);
