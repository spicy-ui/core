import { RequiredTheme, ResponsiveValue, system, SystemConfig, Theme } from '@spicy-ui/styled-system';
import * as CSS from 'csstype';

export interface TransformProps<ThemeType extends Theme = RequiredTheme> {
  transform?: ResponsiveValue<CSS.Property.Transform, ThemeType>;
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin, ThemeType>;
}

const config: SystemConfig = {
  transform: {
    property: 'transform',
  },
  transformOrigin: {
    property: 'transformOrigin',
  },
};

export const transform = system(config);
