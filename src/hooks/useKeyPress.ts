import * as React from 'react';

export const useKeyPress = (targetKey: string, onDown = () => {}, onUp = () => {}) => {
  let prevKey = '';

  const handleDown = ({ key }: KeyboardEvent) => {
    // Don't re-run if the key is the same as last press
    if (targetKey === prevKey) {
      return;
    }

    if (key === targetKey) {
      onDown();
      prevKey = key;
    }
  };

  const handleUp = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      onUp();
      prevKey = '';
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleDown);
    window.addEventListener('keyup', handleUp);

    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('keyup', handleUp);
    };
  }, [targetKey, onDown, onUp]);
};
