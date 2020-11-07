import { SystemStyleObject } from '@styled-system/css';

export type ComponentStyle = SystemStyleObject;

export interface ComponentVariants {
  [variant: string]: ComponentStyle;
}

export interface ComponentSizes {
  [size: string]: ComponentStyle;
}

export interface ComponentTheme {
  baseStyle?: ComponentStyle;
  sizes?: ComponentSizes;
  variants?: ComponentVariants;
}
