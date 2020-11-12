import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { baseStyle } from '../../helpers';
import { Box, BoxProps } from '../Box';
import { IndeterminateHorizontalProgress } from './keyframes';
import { HorizontalProgressProps } from './types';

const StyledHorizontalProgress = styled(Box).withConfig<BoxProps>({ shouldForwardProp })`
  ${baseStyle('components.HorizontalProgress')}
`;

const StyledHorizontalIndeterminateProgressInner = styled(Box).withConfig<BoxProps & { isCapRound?: boolean }>({
  shouldForwardProp,
})`
  ${baseStyle('components.HorizontalIndeterminateProgressInner')}

  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${IndeterminateHorizontalProgress};
  animation-timing-function: ${(p) => p.theme.transitions.timing.inOut};
`;

const StyledHorizontalProgressInner = styled(Box).withConfig<BoxProps & { isCapRound?: boolean }>({
  shouldForwardProp,
})`
  ${baseStyle('components.HorizontalProgressInner')}
`;

export const HorizontalProgress: React.FC<HorizontalProgressProps> = ({
  children,
  color = 'blue.500',
  isCapRound = false,
  isIndeterminate = false,
  max = 100,
  min = 0,
  trackColor = 'gray.100',
  value = 0,
  ...rest
}) => (
  <StyledHorizontalProgress role="progressbar" bg={trackColor} height={4} {...rest}>
    {isIndeterminate ? (
      <StyledHorizontalIndeterminateProgressInner bg={color} height="full" isCapRound={isCapRound} />
    ) : (
      <StyledHorizontalProgressInner
        bg={color}
        height="full"
        isCapRound={isCapRound}
        width={`${Math.min(Math.max(((value - min) * 100) / (max - min), min), max)}%`}
      >
        {children}
      </StyledHorizontalProgressInner>
    )}
  </StyledHorizontalProgress>
);
