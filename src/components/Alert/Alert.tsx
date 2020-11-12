import shouldForwardProp from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { baseStyle, size, variant } from '../../helpers';
import { Box, BoxProps } from '../Box';

export interface AlertProps extends BoxProps {
  variant?: string;
  space?: string;
}

export const Alert = styled(Box).withConfig<AlertProps>({ shouldForwardProp })`
  ${baseStyle('components.Alert')}
  ${variant('components.Alert')}
  ${size('components.Alert', 'space')}
`;

Alert.defaultProps = {
  variant: 'info',
  space: 'md',
  borderRadius: 'sm',
};
