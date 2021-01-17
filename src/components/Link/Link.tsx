import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { display, DisplayProps, position, PositionProps, space, SpaceProps } from 'styled-system';
import { baseStyle } from '../../helpers';

export type LinkUnderlineBehaviour = 'default' | 'none' | 'hover';

export interface LinkProps
  extends DisplayProps,
    PositionProps,
    SpaceProps,
    Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
  /** Color of the link. */
  color?: string;
  /** Hover color of the link. */
  hoverColor?: string;
  /** Underline behaviour of the link. */
  underlineBehaviour?: LinkUnderlineBehaviour;
  /** Set to `true` to disable the link. */
  isDisabled?: boolean;
  /** Set to `true` to add external `rel` tags. */
  isExternal?: boolean;
  /** Configure the link's underline behaviour. */
}

export const Link = styled('a')
  .attrs<LinkProps>(({ isDisabled, isExternal, onClick }) => ({
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
  }))
  .withConfig<LinkProps>({ shouldForwardProp })`
  ${baseStyle('components.Link')}
  ${display}
  ${position}
  ${space}
`;

Link.defaultProps = {
  underlineBehaviour: 'default',
};
