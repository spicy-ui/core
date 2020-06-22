export type ModalSizes = 'sm' | 'md' | 'lg';

export interface ModalWrapperProps {
  /** Set max size of the modal */
  modalSize?: ModalSizes;
}

export interface ModalProps {
  /** Set max size of the modal */
  size?: ModalSizes;
  /** Whether the modal is open or not. */
  isOpen: boolean;
  /** Hides the default close button. Useful if you want to add custom close behaviour. */
  hideCloseButton?: boolean;
  /** Set to `true` to disable closing the modal by clicking the overlay. */
  disableOverlayClick?: boolean;
  /** Set to `true` to disable closing the modal by pushing the escape key. */
  disableListeners?: boolean;
  /** Set to `true` to disable the modals focus trap behaviour. */
  disableFocusTrap?: boolean;
  /** Callback method run when the Close button is clicked. */
  onClose?: () => void;
}
