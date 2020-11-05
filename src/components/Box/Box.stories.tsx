import * as React from 'react';
import { Box } from '..';

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    zIndex: { table: { disable: true } },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export const Simple = (props: any) => <Box {...props}>A Box 📦</Box>;
