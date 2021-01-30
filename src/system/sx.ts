import { css, PseudoProps } from '@spicy-ui/styled-system';
import { AllSystemProps } from './system';

export interface SxProps {
  sx?: Partial<Record<keyof AllSystemProps & PseudoProps, any>>;
}

export function sx(p: SxProps): any {
  return p.sx ? css(p.sx) : {};
}
