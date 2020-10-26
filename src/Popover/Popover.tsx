import { Placement } from '@popperjs/core';
import * as React from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

const Trigger = styled('div')`
  display: inline-flex;
`;

const Container = styled('div')``;

export interface PopoverProps {
  trigger: React.ReactElement;
  children: React.ReactElement;
  placement?: Placement;
}

const Popover: React.FC<PopoverProps> = ({ trigger, children, placement }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const referenceEl = React.useRef<HTMLDivElement>(null);
  const popperEl = React.useRef<HTMLDivElement>(null);

  const { attributes, styles } = usePopper(referenceEl.current, popperEl.current, { placement });

  return (
    <>
      <Trigger ref={referenceEl}>
        {React.cloneElement(trigger, {
          onClick: () => setIsOpen((prev) => !prev),
        })}
      </Trigger>
      <Container ref={popperEl} style={styles.popper} {...attributes.popper}>
        {isOpen && <>{children}</>}
      </Container>
    </>
  );
};

Popover.defaultProps = {
  placement: 'bottom-start',
};

Popover.displayName = 'Popover';

export { Popover };
