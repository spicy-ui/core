import { css, get } from '@spicy-ui/styled-system';

export function getComponentScale(scale: string, prop: string) {
  return (props: any): any => {
    const maybeFn = get(props.theme, `components.${scale}.${props[prop]}`);
    return css(typeof maybeFn === 'function' ? maybeFn(props) : maybeFn);
  };
}
