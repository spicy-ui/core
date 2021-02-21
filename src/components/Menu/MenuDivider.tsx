import styled from 'styled-components';
import { componentStylesMixin, sxMixin, SxProp } from '../../system';

export const MenuDivider = styled.div<SxProp>(componentStylesMixin('MenuDivider'), sxMixin);

MenuDivider.displayName = 'MenuDivider';
