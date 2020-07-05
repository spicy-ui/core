import { css } from '@styled-system/css';
import { DefaultTheme } from 'styled-components';
import { get } from 'styled-system';

export function size(scale: string, prop = 'size') {
  return (props: { theme: DefaultTheme; [key: string]: any }) => {
    const styleFn = get(props.theme, `${scale}.sizes.${props[prop]}`);

    return css(typeof styleFn === 'function' ? styleFn(props) : styleFn)(props);
  };
}
