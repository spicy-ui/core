import styled from 'styled-components';
import { allSystem, AllSystemProps, pseudoSystem, PseudoSystemProps, shouldForwardProp } from '../../system';

export interface BoxProps extends AllSystemProps, PseudoSystemProps {
  color?: string;
}

export const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })(allSystem, pseudoSystem);

Box.displayName = 'Box';
