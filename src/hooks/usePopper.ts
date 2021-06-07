import { Placement } from '@popperjs/core';
import * as React from 'react';
import { usePopper as useReactPopper } from 'react-popper';
import { useTheme } from 'styled-components';
import { useKeyPress } from './useKeyPress';

export interface PopperProps {
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  closeOnInnerClick?: boolean;
  closeOnOuterClick?: boolean;
  placement?: Placement;
  offset?: [number, number];
}

export interface UsePopperOptions {
  isOpen: boolean;
  onClose?: () => void;
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  closeOnInnerClick?: boolean;
  closeOnOuterClick?: boolean;
  placement?: Placement;
  offset?: [number, number];
}

const defaultOptions: Partial<UsePopperOptions> = {
  closeOnBlur: false,
  closeOnEsc: false,
  closeOnInnerClick: false,
  closeOnOuterClick: false,
  placement: 'bottom-start',
  offset: [0, 0],
};

export function usePopper(options: UsePopperOptions) {
  const { isOpen, onClose, closeOnBlur, closeOnEsc, closeOnInnerClick, closeOnOuterClick, placement, offset } = {
    ...defaultOptions,
    ...options,
  };

  const triggerRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);

  const { attributes, styles } = useReactPopper(triggerRef.current, childRef.current, {
    placement,
    modifiers: [{ name: 'offset', options: { offset } }],
  });

  const onTriggerBlur = React.useCallback(() => {
    if (closeOnBlur && onClose) {
      onClose();
    }
  }, [closeOnBlur, onClose]);

  const onDocumentClick = React.useCallback(
    (e: MouseEvent) => {
      if (!isOpen || !onClose) {
        return;
      }

      if (closeOnInnerClick && childRef.current?.contains(e.target as Node)) {
        onClose();
        return;
      }

      if (
        closeOnOuterClick &&
        !triggerRef.current?.contains(e.target as Node) &&
        !childRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    },
    [closeOnInnerClick, closeOnOuterClick, isOpen, onClose],
  );

  useKeyPress('Escape', () => {
    if (isOpen && closeOnEsc && onClose) {
      onClose();
    }
  });

  React.useEffect(() => {
    document.addEventListener('mouseup', onDocumentClick);

    return () => document.removeEventListener('mouseup', onDocumentClick);
  }, [onDocumentClick]);

  const { zIndices } = useTheme();

  return {
    triggerProps: {
      ref: triggerRef,
      onBlur: onTriggerBlur,
      'data-active': isOpen ? true : undefined,
    },
    childProps: {
      ref: childRef,
      style: { ...styles.popper, zIndex: zIndices.popover },
      ...attributes.popper,
    },
  };
}
