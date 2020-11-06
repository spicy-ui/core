import * as React from 'react';
import { Box, Divider } from '..';

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export const Horizontal = () => <Divider />;

export const Vertical = () => (
  <Box display="inline-flex">
    <div>one</div>
    <Divider orientation="vertical" />
    <div>two</div>
  </Box>
);
