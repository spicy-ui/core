import { RequiredTheme, ResponsiveValue, system, SystemConfig, Theme } from '@spicy-ui/styled-system';
import * as CSS from 'csstype';

export interface TransitionProps<ThemeType extends Theme = RequiredTheme> {
  transition?: ResponsiveValue<CSS.Property.Transition, ThemeType>;
  transitionProperty?: ResponsiveValue<CSS.Property.TransitionProperty, ThemeType>;
  transitionDuration?: ResponsiveValue<CSS.Property.TransitionDuration, ThemeType>;
  transitionTiming?: ResponsiveValue<CSS.Property.TransitionTimingFunction, ThemeType>;
  transitionDelay?: ResponsiveValue<CSS.Property.TransitionDelay, ThemeType>;
}

const config: SystemConfig = {
  transition: {
    property: 'transition',
  },
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
    scale: 'transitions.timingFn',
  },
  transitionDelay: {
    property: 'transitionDelay',
    scale: 'transitions.delay',
  },
};

export const transition = system(config);
