import { css as withSystem } from '@styled-system/css';
import { css, DefaultTheme } from 'styled-components';
import { useColorMode } from '../ColorMode';
import { DividerProps } from './types';

const horizontal = ({ colorMode }: UseDividerStyleProps) => {
  const color = colorMode === 'dark' ? 'gray.600' : 'gray.300';

  return {
    width: 'auto',
    my: 'sm',
    border: 0,
    borderColor: 'inherit',
    borderBottom: '1px solid',
    color,
    opacity: 0.6,
  };
};

const vertical = ({ colorMode }: UseDividerStyleProps) => {
  const color = colorMode === 'dark' ? 'gray.600' : 'gray.300';

  return {
    height: 'auto',
    mx: 'sm',
    border: 0,
    borderColor: 'inherit',
    borderLeft: '1px solid',
    color,
    opacity: 0.6,
  };
};

const variants = (props: UseDividerStyleProps) => {
  switch (props.orientation) {
    case 'horizontal':
      return horizontal(props);
    case 'vertical':
      return vertical(props);
    default:
      return {};
  }
};

interface UseDividerStyleProps extends DividerProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

export const useDividerStyle = (props: Omit<UseDividerStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const dividerProps = { ...props, colorMode };

  return css(
    withSystem({
      ...variants(dividerProps),
    })(props),
  );
};
