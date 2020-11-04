import { css } from '@styled-system/css';
import { get } from 'styled-system';
import { MixinProps } from './types';

export const baseStyle = (component: string) => (props: MixinProps) => {
  const styleFn = get(props.theme, `${component}.baseStyle`);

  return css(typeof styleFn === 'function' ? styleFn(props) : styleFn)(props);
};
