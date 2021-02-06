import { Placement } from '@popperjs/core';
import { motion } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { runIfFn } from '../../util';
import { usePopper } from './usePopper';

const Motion = styled(motion.div)({});

interface ChildrenProps {
  isOpen: boolean;
}

export interface PopperProps {
  trigger: React.ReactElement;
  children: React.ReactElement | ((props: ChildrenProps) => React.ReactElement);
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  closeOnInnerClick?: boolean;
  closeOnOuterClick?: boolean;
  placement?: Placement;
  offset?: [number, number];
}

export const Popper: React.FC<PopperProps> = ({
  trigger,
  children,
  closeOnBlur = false,
  closeOnEsc = false,
  closeOnInnerClick = false,
  closeOnOuterClick = false,
  placement = 'bottom-start',
  offset = [0, 0],
}) => {
  const { triggerProps, childProps, isOpen } = usePopper({
    closeOnBlur,
    closeOnEsc,
    closeOnInnerClick,
    closeOnOuterClick,
    placement,
    offset,
  });

  if (!trigger || !children) {
    return null;
  }

  return (
    <>
      {React.cloneElement(trigger, triggerProps)}
      <Motion
        {...childProps}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={{
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
        }}
      >
        {runIfFn(children, { isOpen })}
      </Motion>
    </>
  );
};
