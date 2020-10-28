import styled from 'styled-components';
import { Box } from '../Box';
import { baseStyle, withColorMode } from '../util';

export const Menu = styled(Box)`
  ${withColorMode(baseStyle('components.Menu'))}
`;

export const MenuItem = styled(Box)`
  ${withColorMode(baseStyle('components.MenuItem'))}
`;

export const MenuDivider = styled('div')`
  ${withColorMode(baseStyle('components.MenuDivider'))}
`;

export const MenuHeader = styled(Box)`
  ${withColorMode(baseStyle('components.MenuHeader'))}
`;
