import * as React from 'react';
import clsx from 'clsx';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import { Portal } from '../Portal';
import { ANIMATION_DURATION } from './utils/constants';
import { ModalContent, SizeableModalProps, ModalOverlay } from './styled';
import { Button } from '../Button';

export interface ModalProps extends SizeableModalProps {
  /** Additional CSS classes to give to the modal. */
  className?: string;
  /** Additional CSS properties to give to the modal. */
  style?: React.CSSProperties;
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

interface ModalState {
  isOpen: boolean;
}

class Modal extends React.Component<ModalProps, ModalState> {
  static displayName = 'Modal';

  static defaultProps = {
    className: undefined,
    style: undefined,
    enableFocusTrap: false,
    disableOverlayClick: false,
    isOpen: false,
    size: 'sm',
  };

  constructor(props: ModalProps) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };

    this.handleCloseSideSheet = this.handleCloseSideSheet.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static getDerivedStateFromProps(props: ModalProps) {
    return {
      isOpen: props.isOpen,
    };
  }

  componentDidUpdate(prev: ModalProps) {
    const { isOpen } = this.props;

    if (prev.isOpen !== isOpen) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      this.handleCloseSideSheet();
    }
  }

  handleCloseSideSheet() {
    const { onClose } = this.props;

    if (onClose) {
      onClose();
    }
  }

  handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    const { disableOverlayClick } = this.props;

    // Prevent clicking to exit inside the dialog
    if (e.target !== e.currentTarget) {
      return;
    }

    if (!disableOverlayClick) {
      this.handleCloseSideSheet();
    }
  }

  renderInnerContent = (state: TransitionStatus) => {
    const { labelledById, hideCloseButton, size, children } = this.props;
    const { isOpen } = this.state;

    return (
      <ModalOverlay className={clsx(isOpen && 'entered')} data-state={state} onClick={this.handleOverlayClick}>
        <ModalContent
          className={clsx(isOpen && 'entered')}
          size={size}
          backgroundColor="white"
          boxShadow={3}
          borderRadius="xs"
          my="12vmin"
          mx="md"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledById}
          data-state={state}
        >
          {!hideCloseButton && (
            <Button
              style={{ position: 'absolute', top: 16, right: 16 }}
              type="button"
              variant="ghost"
              aria-label="Close"
              onClick={this.handleCloseSideSheet}
            >
              Close
            </Button>
          )}
          {children}
        </ModalContent>
      </ModalOverlay>
    );
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Portal>
        <Transition
          appear
          in={isOpen}
          timeout={{
            enter: ANIMATION_DURATION,
            exit: ANIMATION_DURATION,
          }}
          unmountOnExit
        >
          {this.renderInnerContent}
        </Transition>
      </Portal>
    );
  }
}

export default Modal;
