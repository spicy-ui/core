import { css as withSystem } from '@styled-system/css';
import { css, DefaultTheme } from 'styled-components';
import { useColorMode } from '../ColorMode';
import { DividerProps } from './Divider';

const horizontal = (props: useDividerStyleProps) => {
  const color = props.colorMode === 'dark' ? 'gray.600' : 'gray.300';

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

const vertical = (props: useDividerStyleProps) => {
  const color = props.colorMode === 'dark' ? 'gray.600' : 'gray.300';

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

const variants = (props: useDividerStyleProps) => {
  switch (props.orientation) {
    case 'horizontal':
      return horizontal(props);
    case 'vertical':
      return vertical(props);
    default:
      return {};
  }
};

interface useDividerStyleProps extends DividerProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

export const useDividerStyle = (props: Omit<useDividerStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const _props = { ...props, colorMode };

  return css(
    withSystem({
      ...variants(_props),
    })(props),
  );
};
