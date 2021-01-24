/* eslint-disable no-underscore-dangle */

import css from '@styled-system/css';
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
} from './util';

const allProps = [
  ...props,
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

export function sfp(p: string[] = []) {
  return createShouldForwardProp([...allProps, ...p]);
}

export const shouldForwardProp = createShouldForwardProp(allProps);

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

export const allSystemProps = compose(
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

export const pseudoProps = {
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

export type PseudoSystemProps = Partial<Record<keyof typeof pseudoProps, AllSystemProps>>;

export function pseudoSystemProps({
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
  return css({
    [pseudoProps._hover]: _hover,
    [pseudoProps._active]: _active,
    [pseudoProps._focus]: _focus,
    [pseudoProps._highlighted]: _highlighted,
    [pseudoProps._focusWithin]: _focusWithin,
    [pseudoProps._focusVisible]: _focusVisible,
    [pseudoProps._disabled]: _disabled,
    [pseudoProps._readOnly]: _readOnly,
    [pseudoProps._before]: _before,
    [pseudoProps._after]: _after,
    [pseudoProps._empty]: _empty,
    [pseudoProps._expanded]: _expanded,
    [pseudoProps._checked]: _checked,
    [pseudoProps._grabbed]: _grabbed,
    [pseudoProps._pressed]: _pressed,
    [pseudoProps._invalid]: _invalid,
    [pseudoProps._valid]: _valid,
    [pseudoProps._loading]: _loading,
    [pseudoProps._selected]: _selected,
    [pseudoProps._hidden]: _hidden,
    [pseudoProps._autofill]: _autofill,
    [pseudoProps._even]: _even,
    [pseudoProps._odd]: _odd,
    [pseudoProps._first]: _first,
    [pseudoProps._last]: _last,
    [pseudoProps._notFirst]: _notFirst,
    [pseudoProps._notLast]: _notLast,
    [pseudoProps._visited]: _visited,
    [pseudoProps._activeLink]: _activeLink,
    [pseudoProps._indeterminate]: _indeterminate,
    [pseudoProps._groupHover]: _groupHover,
    [pseudoProps._groupFocus]: _groupFocus,
    [pseudoProps._groupActive]: _groupActive,
    [pseudoProps._groupDisabled]: _groupDisabled,
    [pseudoProps._groupInvalid]: _groupInvalid,
    [pseudoProps._groupChecked]: _groupChecked,
    [pseudoProps._placeholder]: _placeholder,
    [pseudoProps._fullScreen]: _fullScreen,
    [pseudoProps._selection]: _selection,
  });
}
