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
  thickness = 1,
  value = 0,
}) => {
  const percent = Math.min(Math.max(((value - min) * 100) / (max - min), min), max) / 100;

  return (
    <StyledCircularProgress role="progressbar" fontSize={size}>
      <CircularProgressSvg as="svg" viewBox="0 0 100 100">
        <CircularProgressCircle
          as="circle"
          cx={50}
          cy={50}
          r={42}
          color={trackColor}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={8 * thickness}
        />
        <CircularProgressCircle
          as="circle"
          cx={50}
          cy={50}
          r={42}
          color={color}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={8 * thickness}
          strokeLinecap={isCapRound ? 'round' : undefined}
          strokeDasharray={`${Math.PI * 42 * 2 * percent}, ${Math.PI * 42 * 2}`}
          transform={`rotate(${angle - 90}, 50, 50)`}
        >
          {isIndeterminate && (
            <>
              <animate
                attributeName="stroke-dasharray"
                values="1,400;400,400;400,400"
                dur="2"
                repeatCount="indefinite"
              />
              <animate attributeName="stroke-dashoffset" values="0;-100;-260" dur="2" repeatCount="indefinite" />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="2"
                repeatCount="indefinite"
              />
            </>
          )}
        </CircularProgressCircle>
      </CircularProgressSvg>
      {children && <StyledCircularProgressInner>{children}</StyledCircularProgressInner>}
    </StyledCircularProgress>
  );
};
