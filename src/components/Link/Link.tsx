import { sfp } from '@spicy-ui/styled-system';
import * as React from 'react';
import styled from 'styled-components';
import { getComponentStyles, sxMixin, SxProps } from '../../system';

export type LinkUnderlineBehaviour = 'default' | 'none' | 'hover';

export interface LinkProps extends SxProps, Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
  /** Color of the link. */
  color?: string;
  /** Hover color of the link. */
  hoverColor?: string;
  /** Set to `true` to disable the link. */
  isDisabled?: boolean;
  /** Set to `true` to add external `rel` tags. */
  isExternal?: boolean;
  /** Underline behaviour of the link. */
  underlineBehaviour?: LinkUnderlineBehaviour;
}

export const Link = styled.a
  .attrs<LinkProps>(({ isDisabled, isExternal, onClick }) => ({
    'aria-disabled': isDisabled || undefined,
    'data-disabled': isDisabled || undefined,
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
  }))
  .withConfig<LinkProps>({
    shouldForwardProp: sfp(['color', 'hoverColor', 'isDisabled', 'isExternal', 'underlineBehaviour']),
  })(getComponentStyles('Link'), sxMixin);

Link.defaultProps = {
  underlineBehaviour: 'hover',
};

Link.displayName = 'Link';
