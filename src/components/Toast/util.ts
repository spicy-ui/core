/* eslint-disable no-bitwise */

import { ToastPlacement } from './types';

// https://gist.github.com/solenoid/1372386
export const uuid = () =>
  ((new Date().getTime() / 1000) | 0).toString(16) +
  'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)).toLowerCase();

export function mergeDefined<T = { [key: string]: any }>(...args: { [key: string]: any }[]): T {
  let obj: any = {};

  args.forEach((o) => {
    obj = {
      ...obj,
      ...Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)),
    };
  });

  return obj as T;
}

export const getPlacement = (anchor: ToastPlacement) => {
  switch (anchor) {
    case 'top-left':
      return { top: 0, left: 0 };
    case 'top-right':
      return { top: 0, right: 0 };
    case 'bottom-left':
      return { bottom: 0, left: 0 };
    case 'bottom-right':
      return { bottom: 0, right: 0 };
    default:
      throw new Error(`Unknown anchor '${anchor}'`);
  }
};
