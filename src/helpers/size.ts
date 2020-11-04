import { css } from '@styled-system/css';
import { get } from 'styled-system';
import { MixinProps } from './types';

export const size = (scale: string, prop = 'size') => (props: MixinProps) => {
  const styleFn = get(props.theme, `${scale}.sizes.${props[prop]}`);

  return css(typeof styleFn === 'function' ? styleFn(props) : styleFn)(props);
};
