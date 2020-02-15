import { get } from 'styled-system';
import { DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

export const focus = {
  default: ({ theme }: { theme: DefaultTheme }) =>
    `box-shadow: ${rgba(get(theme.colors, 'blue.500'), 0.6)} 0px 0px 0px 3px;`,
  error: ({ theme }: { theme: DefaultTheme }) =>
    `box-shadow: ${rgba(get(theme.colors, 'red.600'), 0.83)} 0px 0px 0px 3px;`,
};
