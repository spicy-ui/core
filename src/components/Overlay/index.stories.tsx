import * as React from 'react';
import { Button, Overlay, Text } from '..';

export default {
  title: 'Overlay',
  component: Overlay,
};

export const Simple = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} top={0} right={0} bottom={0} left={0}>
        {(state) => (
          <Text>
            Overlay inner (state: <code>{state}</code>)
          </Text>
        )}
      </Overlay>
    </>
  );
};
