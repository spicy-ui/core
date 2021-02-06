import styled from 'styled-components';
import { getComponentStyles, sxMixin, SxProps } from '../../system';

export const MenuHeader = styled.div<SxProps>(getComponentStyles('MenuHeader'), sxMixin);
