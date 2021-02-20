import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { sxMixin, SxProp, useComponentStyles } from '../../system';
import { AsProp, ChildrenProp } from '../../types';
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
export interface OverlayProps extends AsProp, ChildrenProp, SxProp {
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Overlay: React.FC<OverlayProps> = (props) => {
  const { children, sx, isOpen, onClick, ...rest } = props;

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
