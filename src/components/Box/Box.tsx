import styled from 'styled-components';
import { allSystemProps, AllSystemProps, pseudoSystemProps, PseudoSystemProps, shouldForwardProp } from '../../system';

export interface BoxProps extends AllSystemProps, PseudoSystemProps {
  color?: string;
}

export const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })(allSystemProps, pseudoSystemProps);

Box.displayName = 'Box';
