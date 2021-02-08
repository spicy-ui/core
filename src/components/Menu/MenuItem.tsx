import styled from 'styled-components';
import { getComponentStyles, sxMixin, SxProps } from '../../system';

export const MenuItem = styled.div<SxProps>(getComponentStyles('MenuItem'), sxMixin);

MenuItem.displayName = 'MenuItem';
