import { Placement } from '@popperjs/core';
import * as React from 'react';
import { Modifier, usePopper } from 'react-popper';
import { Box } from '../Box';
import { useKeyPress } from '../hooks';

export type Offset = [number, number];

export interface PopoverProps {
  /** Trigger element for the popover. */
  trigger: React.ReactElement;
  /** The content of the popover. */
  children: React.ReactElement;
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
  /** Popover offset. */
  offset?: Offset;
  /** Additional Popper modifiers. */
  modifiers?: Modifier<string>[];
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  isOpen,
  onClose,
  closeOnBlur = true,
  closeOnEsc = false,
  closeOnInnerClick = false,
  closeOnOuterClick = false,
  placement = 'bottom-start',
  offset,
  modifiers = [],
}) => {
  const referenceEl = React.useRef<HTMLDivElement>(null);
  const popperEl = React.useRef<HTMLDivElement>(null);

  const { attributes, styles } = usePopper(referenceEl.current, popperEl.current, {
    placement,
    modifiers: [...(offset ? [{ name: 'offset', options: { offset } }] : []), ...modifiers],
  });

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
    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <>
      <Box ref={referenceEl} display="inline-flex">
        {React.cloneElement(trigger, { onBlur: onTriggerBlur })}
      </Box>
      <Box ref={popperEl} zIndex="popover" style={styles.popper} {...attributes.popper}>
        {isOpen && <>{children}</>}
      </Box>
    </>
  );
};

Popover.displayName = 'Popover';

export { Popover };
