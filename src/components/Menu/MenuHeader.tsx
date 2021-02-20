import styled from 'styled-components';
import { componentStylesMixin, sxMixin, SxProp } from '../../system';

export const MenuHeader = styled.div<SxProp>(componentStylesMixin('MenuHeader'), sxMixin);

MenuHeader.displayName = 'MenuHeader';
