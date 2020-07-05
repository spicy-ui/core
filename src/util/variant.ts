import { css } from '@styled-system/css';
import { DefaultTheme } from 'styled-components';
import { get } from 'styled-system';

export function variant(scale: string, prop = 'variant') {
  return (props: { theme: DefaultTheme; [key: string]: any }) => {
    const styleFn = get(props.theme, `${scale}.variants.${props[prop]}`);

    return css(typeof styleFn === 'function' ? styleFn(props) : styleFn)(props);
  };
}
