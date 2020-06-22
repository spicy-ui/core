export type DrawerAnchor = 'top' | 'right' | 'bottom' | 'left';

export interface DrawerWrapperProps {
  anchor?: DrawerAnchor;
}

export interface DrawerProps {
  /** Whether the drawer is open or not. */
  isOpen: boolean;
  /** Side that the drawer will appear from. */
  anchor?: DrawerAnchor;
  /** Set to `true` to disable closing the drawer by clicking the overlay. */
  disableOverlayClick?: boolean;
  /** Set to `true` to disable closing the drawer by pushing the escape key. */
  disableListeners?: boolean;
  /** Set to `true` to disable the drawers focus trap behaviour. */
  disableFocusTrap?: boolean;
  /** Callback method run when the Close button is clicked. */
  onClose?: () => void;
}
