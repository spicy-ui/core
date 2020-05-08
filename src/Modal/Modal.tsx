/* eslint-disable react/static-property-placement */
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import { Portal } from '../Portal';
import { Button } from '../Button';
import { Box } from '../Box';
import { ModalProps } from './types';
import { ANIMATION_DURATION } from './utils/constants';
import { ModalWrapper, ModalOverlay } from './styled';

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
      <ModalOverlay data-modal-state={state} onClick={this.handleOverlayClick}>
        <FocusLock disabled={!isOpen}>
          <ModalWrapper
            modalSize={size}
            boxShadow={3}
            borderRadius="xs"
            my="12vmin"
            mx="md"
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledById}
            data-modal-state={state}
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
