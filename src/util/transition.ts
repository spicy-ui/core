import { RequiredTheme, ResponsiveValue, system, Theme, ThemeValue } from 'styled-system';

export interface TransitionProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'space', ThemeType>> {
  transitionProperty?: ResponsiveValue<TVal, ThemeType>;
  transitionDuration?: ResponsiveValue<TVal, ThemeType>;
  transitionTiming?: ResponsiveValue<TVal, ThemeType>;
  transitionDelay?: ResponsiveValue<TVal, ThemeType>;
}

export const transition = system({
  transitionProperty: {
    property: 'transitionProperty',
    scale: 'transitions.property',
  },
  transitionDuration: {
    property: 'transitionDuration',
    scale: 'transitions.duration',
  },
  transitionTiming: {
    property: 'transitionTimingFunction',
    scale: 'transitions.timing',
  },
  transitionDelay: {
    property: 'transitionDelay',
    scale: 'transitions.delay',
  },
});

export const transitionProps = ['transitionProperty', 'transitionDuration', 'transitionTiming', 'transitionDelay'];
