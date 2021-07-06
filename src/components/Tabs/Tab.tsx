import { sfp } from '@spicy-ui/styled-system';
import * as React from 'react';
import styled from 'styled-components';
import { componentStylesMixin, sxMixin, SxProp } from '../../system';
import { AsProp, ChildrenProp, HTMLAttributes } from '../../types';

/** Don't pass the 'type' prop when the tab is not a button component. */
const tabSfp = (prop: string, fn: any, target: any): boolean => {
  if (target === 'button') {
    return sfp(['isDisabled', 'isSelected'])(prop);
  }

  return sfp(['type', 'isDisabled', 'isSelected'])(prop);
};

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
    shouldForwardProp: tabSfp as any,
  })(componentStylesMixin('Tab'), sxMixin);

Tab.defaultProps = {
  type: 'button',
  role: 'tab',
};

Tab.displayName = 'Tab';
