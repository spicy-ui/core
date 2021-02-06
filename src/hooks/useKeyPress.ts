import * as React from 'react';

export const useKeyPress = (targetKey: string, onDown = () => {}, onUp = () => {}): void => {
  const prevKey = React.useRef<string>('');

  const handleDown = React.useCallback(
    ({ key }: KeyboardEvent) => {
      // Don't re-run if the key is the same as last press
      if (targetKey === prevKey.current) {
        return;
      }

      if (key === targetKey) {
        onDown();
        prevKey.current = key;
      }
    },
    [targetKey, onDown],
  );

  const handleUp = React.useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        onUp();
        prevKey.current = '';
      }
    },
    [targetKey, onUp],
  );

  React.useEffect(() => {
    window.addEventListener('keydown', handleDown);
    window.addEventListener('keyup', handleUp);

    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('keyup', handleUp);
    };
  }, [targetKey, handleDown, handleUp]);
};
