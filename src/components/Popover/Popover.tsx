import { Placement } from '@popperjs/core';
import * as React from 'react';
import { Modifier, usePopper } from 'react-popper';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled, { useTheme } from 'styled-components';
import { useKeyPress } from '../../hooks';
import { Box } from '../Box';
import { PopoverIn, PopoverOut } from './keyframes';

const PopoverInner = styled('div')`
  &[data-popover-state='entering'],
  &[data-popover-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${PopoverIn};
    animation-duration: ${(p) => p.theme.transitions.duration['300']};
  }

  &[data-popover-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${PopoverOut};
    animation-duration: ${(p) => p.theme.transitions.duration['200']};
  }

  &[data-popover-state='entered'] {
    visibility: visible;
    opacity: 1;
  }
`;

export type PopoverOffset = [number, number];

export interface PopoverProps {
  /** Trigger element for the popover. */
  trigger: React.ReactElement;
  /** The content of the popover. */
  children: React.ReactElement | ((state: TransitionStatus) => React.ReactElement);
  /** Whether the popover is open or not. */
  isOpen: boolean;
  /** Callback method to close the popover. */
  onClose?: () => void;
  /** Set to `true` to enable closing of the popover when the trigger element looses focus. */
  closeOnBlur?: boolean;
  /** Set to `true` to enable closing of the popover by pushing the `Esc` key. */
  closeOnEsc?: boolean;
  /** Set to `true` to enable closing of the popover by clicking inside the popover. */
  closeOnInnerClick?: boolean;
  /** Set to `true` to enable closing of the popover by clicking outside the popover. */
  closeOnOuterClick?: boolean;
  /** Position of the popover. */
  placement?: Placement;
  /** Popover offset in pixels. */
  offset?: PopoverOffset;
  /** Additional Popper modifiers. */
  modifiers?: Modifier<string>[];
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  isOpen,
  onClose,
  closeOnBlur = false,
  closeOnEsc = false,
  closeOnInnerClick = false,
  closeOnOuterClick = false,
  placement = 'bottom-start',
  offset,
  modifiers = [],
}) => {
  const referenceEl = React.useRef<HTMLDivElement>(null);
  const popperEl = React.useRef<HTMLDivElement>(null);

  const { attributes, styles, forceUpdate } = usePopper(referenceEl.current, popperEl.current, {
    placement,
    modifiers: [...(offset ? [{ name: 'offset', options: { offset } }] : []), ...modifiers],
  });

  // Ensures the popper is correctly positioned when opened.
  React.useEffect(() => {
    if (isOpen && forceUpdate) {
      forceUpdate();
    }
  }, [isOpen, forceUpdate]);

  useKeyPress('Escape', () => {
    if (isOpen && closeOnEsc && onClose) {
      onClose();
    }
  });

  const onTriggerBlur = React.useCallback(() => {
    if (closeOnBlur && onClose) {
      onClose();
    }
  }, [closeOnBlur, onClose]);

  const handleDocumentClick = React.useCallback(
    ({ target }: MouseEvent) => {
      if (!isOpen || !onClose) {
        return;
      }

      if (closeOnInnerClick && popperEl.current?.contains(target as Node)) {
        onClose();
        return;
      }

      if (
        closeOnOuterClick &&
        !popperEl.current?.contains(target as Node) &&
        !referenceEl.current?.contains(target as Node)
      ) {
        onClose();
      }
    },
    [closeOnInnerClick, closeOnOuterClick, isOpen, onClose],
  );

  React.useEffect(() => {
    document.addEventListener('mouseup', handleDocumentClick);

    return () => {
      document.removeEventListener('mouseup', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  let enter = 200;
  let exit = 300;

  const theme = useTheme();

  if (theme?.transitions?.duration) {
    enter = parseInt(theme?.transitions?.duration[200], 10);
    exit = parseInt(theme?.transitions?.duration[300], 10);
  }

  return (
    <>
      <Box ref={referenceEl} display="inline-flex">
        {React.cloneElement(trigger, { onBlur: onTriggerBlur })}
      </Box>
      <Box ref={popperEl} zIndex="popover" style={styles.popper} {...attributes.popper}>
        <Transition appear in={isOpen} timeout={{ enter, exit }} unmountOnExit>
          {(state) => (
            <PopoverInner data-popover-state={state}>
              {typeof children === 'function' ? children(state) : children}
            </PopoverInner>
          )}
        </Transition>
      </Box>
    </>
  );
};
