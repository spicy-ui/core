import { css } from '@styled-system/css';
import { get } from 'styled-system';
import { MixinProps } from './types';

export const variant = (scale: string, prop = 'variant') => (props: MixinProps) => {
  const styleFn = get(props.theme, `${scale}.variants.${props[prop]}`);

  return css(typeof styleFn === 'function' ? styleFn(props) : styleFn)(props);
};
