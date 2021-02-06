import styled from 'styled-components';
import { getComponentStyles, sxMixin, SxProps } from '../../system';

export const MenuDivider = styled.div<SxProps>(getComponentStyles('MenuDivider'), sxMixin);

MenuDivider.displayName = 'MenuDivider';
