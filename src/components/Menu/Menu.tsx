import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { PopperProps, useDisclosure, UseDisclosureReturn, usePopper } from '../../hooks';
import { sxMixin, SxProp, useComponentStyles } from '../../system';
import { AsProp, ChildrenProp } from '../../types';
import { runIfFn } from '../../util';
import { Portal } from '../Portal';

const Motion = styled(motion.div)(sxMixin);

const variants: Variants = {
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: { duration: 0.2 },
  },
};

export interface MenuProps extends PopperProps, AsProp, ChildrenProp, SxProp {
  trigger: ((props: UseDisclosureReturn) => React.ReactElement) | React.ReactElement;
  children: ((props: UseDisclosureReturn) => React.ReactElement) | React.ReactNode;
  isFullWidth?: boolean;
  openOnHover?: boolean;
}

export const Menu: React.FC<MenuProps> = (props) => {
  const {
    children,
    sx,
    trigger,
    closeOnBlur,
    closeOnEsc,
    closeOnInnerClick,
    closeOnOuterClick,
    openOnHover,
    placement,
    offset,
    ...rest
  } = props;

  const styles = useComponentStyles('Menu', props);

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const { triggerProps, childProps } = usePopper({
    isOpen,
    onClose,
    closeOnBlur,
    closeOnEsc,
    closeOnInnerClick,
    closeOnOuterClick,
    placement,
    offset,
  });

  return (
    <>
      {React.cloneElement(runIfFn(trigger, { isOpen, onOpen, onClose, onToggle }), {
        ...triggerProps,
        onClick: openOnHover ? undefined : onToggle,
        onKeyDown: ({ key }: React.KeyboardEvent<HTMLDivElement>) => (key === 'Enter' ? onToggle : undefined),
        onMouseEnter: openOnHover ? onOpen : undefined,
      })}
      <Portal>
        <Motion
          {...childProps}
          initial="hidden"
          tabIndex={isOpen ? 0 : -1}
          animate={isOpen ? 'visible' : 'hidden'}
          variants={variants}
          sx={styles}
          {...rest}
        >
          {runIfFn(children, { isOpen, onOpen, onClose, onToggle })}
        </Motion>
      </Portal>
    </>
  );
};

Menu.defaultProps = {
  closeOnBlur: false,
  closeOnEsc: true,
  closeOnInnerClick: true,
  closeOnOuterClick: true,
  placement: 'bottom-start',
  offset: [0, 8],
};

Menu.displayName = 'Menu';
