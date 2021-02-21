import { css, PseudoProps } from '@spicy-ui/styled-system';
import { AllSystemProps } from './system';

export interface SxProp {
  sx?: Partial<Record<keyof AllSystemProps & PseudoProps, any>>;
}

export function sxMixin(p: SxProp): any {
  return p.sx ? css(p.sx) : {};
}
