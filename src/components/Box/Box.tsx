import { shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, AllSystemProps, sx, SxProps } from '../../system';

export interface BoxProps extends AllSystemProps, SxProps {
  color?: any;
}

export const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })(allSystem, sx);

Box.displayName = 'Box';
