import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import { FiChevronDown, FiLoader, FiX } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { typography, TypographyProps } from 'styled-system';
import { Box, BoxProps, Stack } from '../..';
import { baseStyle } from '../../../helpers';

export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinning = styled('div')`
  animation-name: ${Spin};
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const SelectLoading = styled(Box).withConfig<BoxProps & TypographyProps>({ shouldForwardProp })`
  ${baseStyle('components.SelectLoading')}
  ${typography}
`;

const ClearButton = styled(Box).withConfig<BoxProps & TypographyProps>({ shouldForwardProp })`
  ${baseStyle('components.SelectClearButton')}
  ${typography}
`;

const ArrowDown = styled(Box).withConfig<BoxProps & TypographyProps>({ shouldForwardProp })`
  ${baseStyle('components.SelectArrowDown')}
  ${typography}
`;

export interface SelectActionsProps {
  isClearable: boolean;
  isLoading?: boolean;
  onClear: (event: React.MouseEvent) => void;
  size?: string;
}

export const SelectActions: React.FC<SelectActionsProps> = ({ isClearable, isLoading, onClear, size }) => (
  <Stack spacing={2} direction="row" flexShrink={0}>
    {isLoading && (
      <SelectLoading fontSize={size}>
        <Spinning>
          <FiLoader />
        </Spinning>
      </SelectLoading>
    )}
    {!isLoading && isClearable && (
      <ClearButton fontSize={size} onClick={onClear}>
        <FiX />
      </ClearButton>
    )}
    <ArrowDown fontSize={size}>
      <FiChevronDown />
    </ArrowDown>
  </Stack>
);
