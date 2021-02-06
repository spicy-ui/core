import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { SxProps, useComponentStyles } from '../../system';
import { runIfFn } from '../../util';
import { Box } from '../Box';
import { PopperProps, usePopper } from '../Popper';

const Motion = styled(motion.div)({});

const variants: Variants = {
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: { duration: 0.2 },
  },
};

export interface MenuProps extends PopperProps, SxProps {
  trigger: ((props: { isOpen: boolean }) => React.ReactElement) | React.ReactElement;
  children: ((props: { isOpen: boolean }) => React.ReactElement) | React.ReactNode;
}

export const Menu: React.FC<MenuProps> = (props) => {
  const {
    sx,
    children,
    trigger,
    closeOnBlur,
    closeOnEsc,
    closeOnInnerClick,
    closeOnOuterClick,
    placement,
    offset,
    ...rest
  } = props;

  const styles = useComponentStyles('Menu', props);

  const [isOpen, setIsOpen] = React.useState(false);

  const { triggerProps, childProps, onToggle } = usePopper({
    isOpen,
    setIsOpen,
    closeOnBlur,
    closeOnEsc,
    closeOnInnerClick,
    closeOnOuterClick,
    placement,
    offset,
  });

  return (
    <>
      {React.cloneElement(runIfFn(trigger, { isOpen }), { ...triggerProps, onClick: onToggle })}
      <Motion {...childProps} initial="hidden" animate={isOpen ? 'visible' : 'hidden'} variants={variants}>
        <Box sx={styles} {...rest}>
          {runIfFn(children, { isOpen })}
        </Box>
      </Motion>
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
