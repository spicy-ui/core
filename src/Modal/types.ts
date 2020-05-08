export type ModalSizes = 'sm' | 'md' | 'lg';

export interface ModalWrapperProps {
  /** Set max size of the modal */
  modalSize?: ModalSizes;
}

export interface ModalProps {
  /** Additional CSS classes to give to the modal. */
  className?: string;
  /** Additional CSS properties to give to the modal. */
  style?: React.CSSProperties;
  /** Set max size of the modal */
  size?: ModalSizes;
  /** Whether the modal is open or not. */
  isOpen: boolean;
  /** Set to `true` if you want to hide the modal backdrop. */
  noBackdrop?: boolean;
  /** Hides the default close button. Useful if you want to add custom close behaviour. */
  hideCloseButton?: boolean;
  /** Set to `true` to disable closing the modal by clicking the overlay. */
  disableOverlayClick?: boolean;
  /**
   * Enables focus trap mode.
   * @TODO implement focus trapping: https://www.npmjs.com/package/focus-trap
   */
  enableFocusTrap?: boolean;
  /** Used to reference the ID of the title element in the modal */
  labelledById?: string;
  /** Callback method run when the Close button is clicked. */
  onClose?: () => void;
}
