import * as React from 'react';

export interface UseDisclosureProps {
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export function useDisclosure(props: UseDisclosureProps = {}): UseDisclosureReturn {
  const { defaultIsOpen, onOpen: onOpenProp, onClose: onCloseProp } = props;

  const [isOpen, setIsOpen] = React.useState(defaultIsOpen || false);

  const onOpen = React.useCallback(() => {
    setIsOpen(true);

    if (onOpenProp) {
      onOpenProp();
    }
  }, [onOpenProp]);

  const onClose = React.useCallback(() => {
    setIsOpen(false);

    if (onCloseProp) {
      onCloseProp();
    }
  }, [onCloseProp]);

  const onToggle = React.useCallback(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onClose, onOpen]);

  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
