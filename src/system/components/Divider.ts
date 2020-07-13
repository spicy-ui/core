import { ComponentTheme } from '../types';
import { colorMode } from '../../util';

export const Divider: ComponentTheme = {
  baseStyle: (props) => ({
    border: 0,
    borderColor: 'inherit',
    color: colorMode('gray.300', 'gray.600')(props),
    opacity: 0.6,
  }),
  variants: {
    horizontal: {
      width: 'auto',
      my: 2,
      borderBottom: '1px solid',
    },
    vertical: {
      height: 'auto',
      mx: 2,
      borderLeft: '1px solid',
    },
  },
};
