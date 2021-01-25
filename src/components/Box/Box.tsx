import styled from 'styled-components';
import {
  allSystem,
  AllSystemProps,
  pseudoSystem,
  PseudoSystemProps,
  shouldForwardProp,
  sx,
  SxProp,
} from '../../system';

export interface BoxProps extends AllSystemProps, PseudoSystemProps, SxProp {
  color?: string;
}

export const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })(allSystem, pseudoSystem, sx);

Box.displayName = 'Box';
