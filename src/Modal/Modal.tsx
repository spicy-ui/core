import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import ModalOverlay from './ModalOverlay';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { ANIMATION_DURATION } from './constants';

export type ModalSizes = 'sm' | 'md' | 'lg';

export interface ModalProps {
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
  /** Set max size of the modal */
  size?: ModalSizes;
  /** Callback method run when the Close button is clicked. */
  onClose?: () => void;
}

interface ModalState {
  isOpen: boolean;
}

const ModalIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -25%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translate(0, -25%);
  }
`;

const ModalContent = styled(Box)`
  opacity: 0;
  transform: translate(0, -25%);
  overflow: hidden;
  &[data-state='entering'],
  &[data-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalIn};
    animation-duration: ${ANIMATION_DURATION}ms;
  }
  &[data-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalOut};
    animation-duration: ${ANIMATION_DURATION}ms;
  }
  &.entered {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

class Modal extends React.Component<ModalProps, ModalState> {
  static displayName = 'Modal';

  static defaultProps = {
    className: undefined,
    style: undefined,
    enableFocusTrap: false,
    disableOverlayClick: false,
    isOpen: false,
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
        document.body.classList.add('noscroll');
      } else {
        document.body.classList.remove('noscroll');
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
    const { labelledById, hideCloseButton, children } = this.props;
    const { isOpen } = this.state;

    return (
      <ModalOverlay className={clsx(isOpen && 'entered')} data-state={state} onClick={this.handleOverlayClick}>
        <ModalContent
          className={clsx(isOpen && 'entered')}
          display="flex"
          flexDirection="column"
          backgroundColor="white"
          boxShadow={2}
          width="100%"
          maxWidth="500px"
          height="100%"
          maxHeight="calc(100% - 24vmin)"
          my="12vmin"
          mx="md"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledById}
          data-state={state}
        >
          {!hideCloseButton && (
            <button
              style={{ position: 'absolute', top: 16, right: 16 }}
              type="button"
              aria-label="Close"
              onClick={this.handleCloseSideSheet}
            >
              Close
            </button>
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
