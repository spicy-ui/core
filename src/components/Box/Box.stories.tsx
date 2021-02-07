import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Box, BoxProps } from '..';

export default {
  title: 'Box',
  component: Box,
} as Meta<BoxProps>;

export const Simple: Story<BoxProps> = (props) => <Box {...props}>A Box 📦</Box>;
