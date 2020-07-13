import { SystemStyleObject } from '@styled-system/css';

export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type ComponentStyle = SystemStyleObject;

export interface ComponentVariants {
  [variant: string]: ComponentStyle;
}

export interface ComponentSizes {
  [variant: string]: ComponentStyle;
}

export interface ComponentTheme {
  baseStyle?: ComponentStyle;
  variants?: ComponentVariants;
  sizes?: ComponentSizes;
}
