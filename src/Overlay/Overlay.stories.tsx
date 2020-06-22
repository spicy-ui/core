import * as React from 'react';
import { Overlay } from '..';

export default {
  title: 'Overlay',
  component: Overlay,
};

export const Simple = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        open overlay
      </button>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} top={0} right={0} bottom={0} left={0}>
        {(state) => (
          <div>
            overlay inner (state: <code>{state}</code>)
          </div>
        )}
      </Overlay>
    </>
  );
};
