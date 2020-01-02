/**
 * Modified version of the styled-system space util, this one
 * multiplies incomming number props with the `theme.space.base` value (8 by default).
 *
 * ```
 * <Box m={3} /> // will have a margin of 24px
 * <Box p={-1} /> // will have a padding of -8px
 * ```
 *
 * However, this removes the ability to use `theme.space = []` and then index values using numbers.
 *
 * ```
 * // assuming theme.space = [0, 8, 16];
 *
 * <Box m={3} // will still have a margin of 24px
 * ```
 *
 * This is easily worked around by using `theme.space = {}` with named keys (as most of our other theme keys do as well)
 *
 * ```
 * // assuming theme.space = { none: 0, small: 8, base: 16, double: 24 };
 *
 * <Box m="base" // will have a margin of 16px
 * ```
 */

import { compose, get, system } from '@styled-system/core';
import { SpaceProps as StyledSpaceProps } from 'styled-system';

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n);

const getSpace = (n: any, scale: any) => {
  if (isNumber(n)) {
    const isNegative = n < 0;
    const absolute = Math.abs(n);
    const baseSize = get(scale, 'base', 8);
    return absolute * baseSize * (isNegative ? -1 : 1);
  }

  return get(scale, n, n);
};

const configs: { [key: string]: any } = {};

configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;

configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    transform: getSpace,
    defaultScale: defaults.space,
  },
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;

export const margin = system(configs.margin);
export const padding = system(configs.padding);

export const space = compose(margin, padding);

export type SpaceProps = StyledSpaceProps;
