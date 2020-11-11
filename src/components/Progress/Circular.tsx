import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { baseStyle } from '../../helpers';
import { Box, BoxProps } from '../Box';
import { CircularProgressProps } from './types';

const StyledCircularProgress = styled(Box).withConfig<BoxProps & { fontSize?: string }>({ shouldForwardProp })`
  ${baseStyle('components.CircularProgress')}
`;

const CircularProgressSvg = styled(Box).withConfig<BoxProps>({ shouldForwardProp })`
  ${baseStyle('components.CircularProgressSvg')}
`;

const CircularProgressCircle = styled(Box).withConfig<BoxProps>({ shouldForwardProp })`
  ${baseStyle('components.CircularProgressCircle')}
`;

const StyledCircularProgressInner = styled(Box).withConfig<BoxProps>({ shouldForwardProp })`
  ${baseStyle('components.CircularProgressInner')}
`;

export const CircularProgress: React.FC<CircularProgressProps> = ({
  angle = 0,
  children,
  color = 'blue.500',
  isCapRound = false,
  isIndeterminate = false,
  max = 100,
  min = 0,
  size = '48px',
  trackColor = 'gray.100',
  thickness = 0.2,
  value,
}) => (
  <StyledCircularProgress role="progressbar" fontSize={size}>
    <CircularProgressSvg as="svg" viewBox="0 0 100 100">
      <CircularProgressCircle
        as="circle"
        cx={50}
        cy={50}
        r={50}
        color="currentColor"
        fill="transparent"
        stroke="currentColor"
        strokeWidth={5}
      />
      {/* <circle /> */}
    </CircularProgressSvg>
    {children && <StyledCircularProgressInner>{children}</StyledCircularProgressInner>}
  </StyledCircularProgress>
);
