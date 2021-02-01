import { HeadingProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Heading: ComponentThemeConfig<HeadingProps> = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      h6: () => ({
        fontSize: 'lg',
        lineHeight: 7,
      }),
      h5: () => ({
        fontSize: 'xl',
        lineHeight: 8,
      }),
      h4: () => ({
        fontSize: '2xl',
        lineHeight: 9,
      }),
      h3: () => ({
        fontSize: '3xl',
        lineHeight: 10,
      }),
      h2: () => ({
        fontSize: '4xl',
        lineHeight: '3rem',
      }),
      h1: () => ({
        fontSize: '5xl',
        lineHeight: '3.5rem',
      }),
    },
  },
};
