import { sfp } from '@spicy-ui/styled-system';
import * as React from 'react';
import styled from 'styled-components';
import { componentStylesMixin, sxMixin, SxProp } from '../../system';
import { AsProp, ChildrenProp, HTMLAttributes } from '../../types';

export interface TabProps extends HTMLAttributes, AsProp, ChildrenProp, SxProp {
  isDisabled?: boolean;
  isSelected?: boolean;
}

export const Tab = styled.button
  .attrs<TabProps>(({ isDisabled, isSelected, onClick }) => ({
    'aria-disabled': isDisabled || undefined,
    'data-disabled': isDisabled || undefined,
    'aria-selected': isSelected || undefined,
    'data-selected': isSelected || undefined,
    disabled: isDisabled || undefined,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }
    },
    tabIndex: isDisabled ? -1 : undefined,
  }))
  .withConfig<TabProps>({
    shouldForwardProp: sfp(['isDisabled', 'isSelected']),
  })(componentStylesMixin('Tab'), sxMixin);

Tab.defaultProps = {
  type: 'button',
  role: 'tab',
};

Tab.displayName = 'Tab';
