/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';

function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

export function runIfFn<Result, Args>(valueOrFn: Result | ((...fnArgs: Args[]) => Result), ...args: Args[]) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// https://github.com/gregberge/react-merge-refs
export function mergeRefs<T = any>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        // eslint-disable-next-line no-param-reassign
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
