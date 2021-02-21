import styled from 'styled-components';
import { componentStylesMixin, sxMixin, SxProp } from '../../system';

export const MenuItem = styled.div<SxProp>(componentStylesMixin('MenuItem'), sxMixin);

MenuItem.displayName = 'MenuItem';
