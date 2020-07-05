import { css } from '@styled-system/css';
import { DefaultTheme } from 'styled-components';
import { get } from 'styled-system';

export function baseStyle(component: string) {
  return (props: { theme: DefaultTheme; [key: string]: any }) => {
    const styleFn = get(props.theme, `${component}.baseStyle`);

    return css(typeof styleFn === 'function' ? styleFn(props) : styleFn)(props);
  };
}
