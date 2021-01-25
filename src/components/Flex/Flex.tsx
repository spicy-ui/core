import styled from 'styled-components';
import { allSystem, pseudoSystem, sfp } from '../../system';
import { BoxProps } from '../Box';
import { flexSystem, flexSystemProps, FlexSystemProps } from './system';

export interface FlexProps extends BoxProps, FlexSystemProps {}

export const Flex = styled.div.withConfig<FlexProps>({ shouldForwardProp: sfp(flexSystemProps) })(
  allSystem,
  pseudoSystem,
  flexSystem,
);

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';
