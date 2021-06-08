import { shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, AllSystemProps, sxMixin, SxProp } from '../../system';
import { AsProp, ChildrenProp, HTMLAttributes } from '../../types';

export interface BoxProps extends HTMLAttributes, AsProp, ChildrenProp, AllSystemProps, SxProp {
  color?: any;
}

export const Box = styled.div.withConfig<BoxProps>({ shouldForwardProp })(sxMixin, allSystem);

Box.displayName = 'Box';
