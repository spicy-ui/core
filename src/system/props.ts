/* eslint-disable no-underscore-dangle */

import css, { SystemStyleObject } from '@styled-system/css';
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from 'styled-system';
import {
  background,
  backgroundProps,
  BackgroundProps,
  color,
  colorProps,
  ColorProps,
  grid,
  GridProps,
  gridProps,
  layout,
  layoutProps,
  LayoutProps,
  other,
  otherProps,
  OtherProps,
  position,
  positionProps,
  PositionProps,
  transform,
  TransformProps,
  transformProps,
  transition,
  transitionProps,
  TransitionProps,
  typography,
  typographyProps,
  TypographyProps,
} from './core';

/**
 * Props for all styled-system and custom utils.
 */
export type AllSystemProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  TransitionProps &
  TransformProps &
  OtherProps;

/**
 * All styled-system and custom utils composed into one util.
 */
export const allSystem = compose(
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  transition,
  transform,
  other,
);

/**
 * Pseudo props mapped to CSS rule declartion.
 */
export const pseudoSystemProps = {
  _hover: '&:hover, &[data-hover]',
  _active: '&:active, &[data-active]',
  _focus: '&:focus, &[data-focus]',
  _highlighted: '&[data-highlighted]',
  _focusWithin: '&:focus-within',
  _focusVisible: '&:focus-visible',
  _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
  _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
  _before: '&::before',
  _after: '&::after',
  _empty: '&::empty',
  _expanded: '&[aria-expanded=true], &[data-expanded]',
  _checked: '&[aria-checked=true], &[data-checked]',
  _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
  _pressed: '&[aria-pressed=true], &[data-pressed]',
  _invalid: '&[aria-invalid=true], &[data-invalid]',
  _valid: '&[data-valid], &[data-state=valid]',
  _loading: '&[data-loading], &[aria-busy=true]',
  _selected: '&[aria-selected=true], &[data-selected]',
  _hidden: '&[hidden], &[data-hidden]',
  _autofill: '&:-webkit-autofill',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _visited: '&:visited',
  _activeLink: '&[aria-current=page]',
  _indeterminate: '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
  _groupHover: '&[role=group]:hover &, &[role=group][data-hover] &',
  _groupFocus: '&[role=group]:focus &, &[role=group][data-focus] &',
  _groupActive: '&[role=group]:active &, &[role=group][data-active] &',
  _groupDisabled: '&[role=group]:disabled &, [role=group][data-disabled] &',
  _groupInvalid: '&[role=group][data-invalid] &',
  _groupChecked: '&[role=group][data-checked] &',
  _placeholder: '&::placeholder',
  _fullScreen: '&:fullscreen',
  _selection: '&::selection',
};

function mapPseudoProps({
  _hover,
  _active,
  _focus,
  _highlighted,
  _focusWithin,
  _focusVisible,
  _disabled,
  _readOnly,
  _before,
  _after,
  _empty,
  _expanded,
  _checked,
  _grabbed,
  _pressed,
  _invalid,
  _valid,
  _loading,
  _selected,
  _hidden,
  _autofill,
  _even,
  _odd,
  _first,
  _last,
  _notFirst,
  _notLast,
  _visited,
  _activeLink,
  _indeterminate,
  _groupHover,
  _groupFocus,
  _groupActive,
  _groupDisabled,
  _groupInvalid,
  _groupChecked,
  _placeholder,
  _fullScreen,
  _selection,
}: PseudoSystemProps) {
  return {
    [pseudoSystemProps._hover]: _hover,
    [pseudoSystemProps._active]: _active,
    [pseudoSystemProps._focus]: _focus,
    [pseudoSystemProps._highlighted]: _highlighted,
    [pseudoSystemProps._focusWithin]: _focusWithin,
    [pseudoSystemProps._focusVisible]: _focusVisible,
    [pseudoSystemProps._disabled]: _disabled,
    [pseudoSystemProps._readOnly]: _readOnly,
    [pseudoSystemProps._before]: _before,
    [pseudoSystemProps._after]: _after,
    [pseudoSystemProps._empty]: _empty,
    [pseudoSystemProps._expanded]: _expanded,
    [pseudoSystemProps._checked]: _checked,
    [pseudoSystemProps._grabbed]: _grabbed,
    [pseudoSystemProps._pressed]: _pressed,
    [pseudoSystemProps._invalid]: _invalid,
    [pseudoSystemProps._valid]: _valid,
    [pseudoSystemProps._loading]: _loading,
    [pseudoSystemProps._selected]: _selected,
    [pseudoSystemProps._hidden]: _hidden,
    [pseudoSystemProps._autofill]: _autofill,
    [pseudoSystemProps._even]: _even,
    [pseudoSystemProps._odd]: _odd,
    [pseudoSystemProps._first]: _first,
    [pseudoSystemProps._last]: _last,
    [pseudoSystemProps._notFirst]: _notFirst,
    [pseudoSystemProps._notLast]: _notLast,
    [pseudoSystemProps._visited]: _visited,
    [pseudoSystemProps._activeLink]: _activeLink,
    [pseudoSystemProps._indeterminate]: _indeterminate,
    [pseudoSystemProps._groupHover]: _groupHover,
    [pseudoSystemProps._groupFocus]: _groupFocus,
    [pseudoSystemProps._groupActive]: _groupActive,
    [pseudoSystemProps._groupDisabled]: _groupDisabled,
    [pseudoSystemProps._groupInvalid]: _groupInvalid,
    [pseudoSystemProps._groupChecked]: _groupChecked,
    [pseudoSystemProps._placeholder]: _placeholder,
    [pseudoSystemProps._fullScreen]: _fullScreen,
    [pseudoSystemProps._selection]: _selection,
  };
}

/**
 * Props for all pseudo system props.
 */
export type PseudoSystemProps = Partial<Record<keyof typeof pseudoSystemProps, AllSystemProps>>;

/**
 * Pseudo props util.
 */
export function pseudoSystem(p: any) {
  return css(mapPseudoProps(p));
}

/**
 * The `sx` prop allows you style elements inline, using values from your theme and supports pseudo props.
 */
export interface SxProp {
  sx?: SystemStyleObject;
}

/**
 * The `sx` prop util.
 */
export function sx(p: any) {
  if (!p.sx) {
    return {};
  }

  return css({ ...p.sx, ...mapPseudoProps(p.sx) });
}

/**
 * Array of all prop keys.
 */
const allProps = [
  ...props,
  ...Object.keys(pseudoSystemProps),
  ...backgroundProps,
  ...colorProps,
  ...gridProps,
  ...layoutProps,
  ...otherProps,
  ...positionProps,
  ...transformProps,
  ...transitionProps,
  ...typographyProps,
];

/**
 * Should forward prop function for adding additional props to exclude.
 * Includes all styled-system and custom util props.
 */
export function sfp(p: string[] = []) {
  return createShouldForwardProp([...allProps, ...p]);
}

/**
 * Should forward prop that includes all styled-system and custom util props.
 */
export const shouldForwardProp = createShouldForwardProp(allProps);
