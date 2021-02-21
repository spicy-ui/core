export type LiteralUnion<T extends U, U = string> = T | (U & { _?: never });

export interface AsProp<P = any> {
  as?: string | React.ComponentType<P>;
}

export interface ChildrenProp {
  children?: React.ReactNode;
}
