import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { sxMixin, SxProps, useComponentStyles } from '../../system';
import { Portal } from '../Portal';

const Motion = styled(motion.div)(sxMixin);

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
export interface OverlayProps extends SxProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Overlay: React.FC<OverlayProps> = (props) => {
  const { sx, children, isOpen, onClick, ...rest } = props;

  const style = useComponentStyles('Overlay', props);

  return (
    <Portal>
      <Motion
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={variants}
        onClick={onClick}
        sx={style}
        {...rest}
      >
        {children}
      </Motion>
    </Portal>
  );
};

Overlay.displayName = 'Overlay';
