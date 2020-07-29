import * as React from 'react';
import styled from 'styled-components';
import { baseStyle, withColorMode } from '../util';

export interface LinkProps extends Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
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
}))<LinkProps>`
  ${withColorMode(baseStyle('components.Link'))}
`;

Link.displayName = 'Link';

export { Link };
