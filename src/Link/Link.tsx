import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled from 'styled-components';
import { baseStyle, withColorMode } from '../util';

const StyledLink = styled('a').withConfig<LinkProps>({ shouldForwardProp })`
  ${withColorMode(baseStyle('components.Link'))}
`;

export interface LinkProps extends Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
  /** Set to `true` to disable the link. */
  isDisabled?: boolean;
  /** Set to `true` to add external `rel` tags. */
  isExternal?: boolean;
}

const InnerLink: React.FC<LinkProps> = ({ children, isExternal, isDisabled, onClick, ...props }) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }
    },
    [isDisabled, onClick],
  );

  return (
    <StyledLink
      aria-disabled={isDisabled || undefined}
      tabIndex={isDisabled ? -1 : undefined}
      target={isExternal ? '_blank' : undefined}
      role={isExternal ? `noopener noreferrer` : undefined}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

const Link = styled(InnerLink)``;

Link.displayName = 'Link';

export { Link };
