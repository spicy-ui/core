import * as React from 'react';
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import { Portal } from '../Portal';
import { ModalSizes } from './utils/helpers';
import { ANIMATION_DURATION } from './utils/constants';
import { ModalWrapper, ModalOverlay } from './styled';
import { Button } from '../Button';
import { Box } from '../Box';

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
  }

  static getDerivedStateFromProps(props: ModalProps) {
    return {
      isOpen: props.isOpen,
    };
  }

  componentDidUpdate(prev: ModalProps) {
    const { isOpen } = this.props;

    if (prev.isOpen !== isOpen) {
      document.body.classList.toggle('noscroll', isOpen);
    }
  }

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.handleCloseSideSheet();
    }
  };

  handleCloseSideSheet = () => {
    const { onClose } = this.props;

    if (onClose) {
      onClose();
    }
  };

  handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { disableOverlayClick } = this.props;

    // Prevent clicking to exit inside the dialog
    if (e.target !== e.currentTarget) {
      return;
    }

    if (!disableOverlayClick) {
      this.handleCloseSideSheet();
    }
  };

  renderInnerContent = (state: TransitionStatus) => {
    const { labelledById, hideCloseButton, size, children } = this.props;
    const { isOpen } = this.state;

    return (
      <ModalOverlay className={clsx(isOpen && 'entered')} data-state={state} onClick={this.handleOverlayClick}>
        <FocusLock disabled={!isOpen}>
          <ModalWrapper
            className={clsx(isOpen && 'entered')}
            modalSize={size}
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
              <Box position="absolute" top="sm" right="md">
                <Button type="button" variant="ghost" aria-label="Close" onClick={this.handleCloseSideSheet}>
                  Close
                </Button>
              </Box>
            )}
            {children}
          </ModalWrapper>
        </FocusLock>
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
