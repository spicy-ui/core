import { SystemStyleObject } from '@styled-system/css';

export type ComponentThemeScale = SystemStyleObject;

export interface ComponentThemeConfig {
  propToScaleMap?: Array<[string, string]>;
  defaultProps?: { [prop: string]: any };
  baseStyle?: ComponentThemeScale;
  [scale: string]: ComponentThemeScale | undefined;
}
