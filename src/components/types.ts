export type LiteralUnion<T extends U, U = string> = T | (U & { zz_ignore?: never });
