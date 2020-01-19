import css from '@styled-system/css';
import { createParser, get } from 'styled-system';

export const variant = ({ scale, prop = 'variant', variants = {}, key }: any) => {
  let sx: any = { scale: undefined, defaults: undefined };

  sx = (value: any, scale: any, props: any) => css(get(scale, value, ''))(props.theme);

  sx.scale = scale || key;
  sx.defaults = variants;

  const config = {
    [prop]: sx,
  };

  const parser = createParser(config);

  return parser;
};

export const buttonStyle = variant({ key: 'buttons' });
export const textStyle = variant({ key: 'textStyles', prop: 'textStyle' });
export const colorStyle = variant({ key: 'colorStyles', prop: 'colors' });
