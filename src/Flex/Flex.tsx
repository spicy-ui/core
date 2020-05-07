import * as React from 'react';
import { Box } from '../Box';
import { FlexProps } from './types';

const Flex: React.FC<FlexProps> = ({ align, direction, justify, wrap, ...rest }) => (
  <Box display="flex" alignItems={align} flexDirection={direction} flexWrap={wrap} justifyContent={justify} {...rest} />
);

Flex.displayName = 'Flex';

export { Flex };
