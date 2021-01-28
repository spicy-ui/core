import { css } from '@styled-system/css';
import { get } from 'styled-system';

export function getComponentScale(scale: string, prop: string) {
  return (props: any) => {
    const maybeFn = get(props.theme, `components.${scale}.${props[prop]}`);
    return css(typeof maybeFn === 'function' ? maybeFn(props) : maybeFn);
  };
}
