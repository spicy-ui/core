// FIXME was SystemStyleObject
export type ComponentThemeScale = any;

export interface ComponentThemeConfig {
  // todo add generic for props
  propToScaleMap?: Array<[string, string]>;
  defaultProps?: { [prop: string]: any }; // todo remove
  baseStyle?: ComponentThemeScale;
  [scale: string]: ComponentThemeScale | undefined;
}
