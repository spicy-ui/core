/**
 * util for async searchable story
 * this is not published in package
 */

import * as React from 'react';

function useSafeDispatch<T = any>(dispatch: React.Dispatch<T>) {
  const mounted = React.useRef(false);

  React.useLayoutEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return React.useCallback(
    (arg: T) => {
      return mounted.current ? dispatch(arg) : undefined;
    },
    [dispatch],
  );
}

interface AsyncState<Data = any, Error = any> {
  status?: 'idle' | 'pending' | 'rejected' | 'resolved';
  data?: Data;
  error?: Error;
}

const defaultInitialState: AsyncState = { status: 'idle', data: undefined, error: undefined };

export function useAsync<Data = any, Error = any>(initialState?: AsyncState<Data, Error>) {
  const initialStateRef = React.useRef<AsyncState<Data, Error>>({
    ...defaultInitialState,
    ...initialState,
  });

  const [{ status, data, error }, setState] = React.useReducer(
    (s: AsyncState<Data, Error>, a: AsyncState<Data, Error>) => ({ ...s, ...a }),
    initialStateRef.current,
  );

  const safeSetState = useSafeDispatch<AsyncState<Data, Error>>(setState);

  const setData = React.useCallback(
    (nextData?: Data) => {
      safeSetState({ data: nextData, status: 'resolved' });
    },
    [safeSetState],
  );

  const setError = React.useCallback(
    (nextError: Error) => {
      safeSetState({ error: nextError, status: 'rejected' });
    },
    [safeSetState],
  );

  const reset = React.useCallback(() => {
    safeSetState(initialStateRef.current);
  }, [safeSetState]);

  const run = React.useCallback(
    (promise: Promise<any>) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to 'useAsync().run' must be a promise. Maybe a function that's passed isn't returning anything?`,
        );
      }

      safeSetState({ status: 'pending' });

      return promise.then(
        (nextData) => {
          setData(nextData);
          return nextData;
        },
        (nextError) => {
          setError(nextError);
          return Promise.reject(nextError);
        },
      );
    },
    [safeSetState, setData, setError],
  );

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  };
}
