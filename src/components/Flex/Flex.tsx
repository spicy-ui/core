import styled from 'styled-components';
import { allSystemProps, pseudoSystemProps, sfp } from '../../system';
import { BoxProps } from '../Box';
import { flexComponent, flexComponentProps, FlexComponentProps } from './util';

export interface FlexProps extends BoxProps, FlexComponentProps {}

export const Flex = styled.div.withConfig<FlexProps>({ shouldForwardProp: sfp(flexComponentProps) })(
  allSystemProps,
  pseudoSystemProps,
  flexComponent,
);

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';
