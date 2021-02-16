import { shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, AllSystemProps, sxMixin, SxProps } from '../../system';

export interface BoxProps extends AllSystemProps, SxProps {
  color?: any;
}

export const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })(sxMixin, allSystem);

Box.displayName = 'Box';
