import styled from 'styled-components';
import { allSystem, flexUtil, flexUtilProps, FlexUtilProps, pseudoSystem, sfp } from '../../system';
import { BoxProps } from '../Box';

export interface FlexProps extends BoxProps, FlexUtilProps {}

export const Flex = styled.div.withConfig<FlexProps>({ shouldForwardProp: sfp(flexUtilProps) })(
  allSystem,
  pseudoSystem,
  flexUtil,
);

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';
