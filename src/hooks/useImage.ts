import * as React from 'react';

interface State {
  image?: HTMLImageElement;
  status: 'loading' | 'loaded' | 'failed';
}

const defaultState: State = {
  image: undefined,
  status: 'loading',
};

export function useImage(url?: string, crossOrigin?: string) {
  const [state, setState] = React.useState<State>(defaultState);
  const { image, status } = state;

  React.useEffect(() => {
    if (!url) {
      return undefined;
    }

    const img = document.createElement('img');

    function onload() {
      setState({ image: img, status: 'loaded' });
    }

    function onerror() {
      setState({ image: undefined, status: 'failed' });
    }

    img.addEventListener('load', onload);
    img.addEventListener('error', onerror);

    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }

    img.src = url;

    return () => {
      img.removeEventListener('load', onload);
      img.removeEventListener('error', onerror);
      setState(defaultState);
    };
  }, [crossOrigin, url]);

  return { image, status };
}
