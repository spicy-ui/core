import shouldForwardProp from '@styled-system/should-forward-prop';
import styled, { keyframes } from 'styled-components';
import { typography, TypographyProps } from 'styled-system';
import { Box, BoxProps } from '..';
import { baseStyle } from '../../helpers';

export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SelectLoading = styled(Box).withConfig<BoxProps & TypographyProps>({ shouldForwardProp })`
  animation-name: ${Spin};
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  ${baseStyle('components.SelectLoading')}
  ${typography}
`;

export const SelectClear = styled(Box).withConfig<BoxProps & TypographyProps>({ shouldForwardProp })`
  ${baseStyle('components.SelectClear')}
  ${typography}
`;

export const SelectArrow = styled(Box).withConfig<BoxProps & TypographyProps>({ shouldForwardProp })`
  ${baseStyle('components.SelectArrow')}
  ${typography}
`;
