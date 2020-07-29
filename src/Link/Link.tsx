import * as React from 'react';
import styled, { css } from 'styled-components';
import { color, ColorProps, layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { baseStyle, withColorMode } from '../util';

export interface LinkProps
  extends LayoutProps,
    SpaceProps,
    Omit<ColorProps, 'color'>,
    TypographyProps,
    Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
  /** Set to `true` to disable the link. */
  isDisabled?: boolean;
  /** Set to `true` to add external `rel` tags. */
  isExternal?: boolean;
}

const Link = styled('a').attrs(({ isDisabled, isExternal, onClick }: LinkProps) => ({
  'aria-disabled': isDisabled || undefined,
  tabIndex: isDisabled ? -1 : undefined,
  target: isExternal ? '_blank' : undefined,
  role: isExternal ? `noopener noreferrer` : undefined,
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  },
}))<LinkProps>((p) =>
  css({
    ...withColorMode(baseStyle('components.Link'))(p),
    ...layout(p),
    ...space(p),
    ...color(p),
    ...typography(p),
  }),
);

Link.displayName = 'Link';

export { Link };
