import { SkeletonProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Skeleton: ComponentThemeConfig<SkeletonProps> = {
  propToScaleMap: [['variant', 'variants']],
  baseStyle: () => ({
    height: '1.2em',
    display: 'block',
    bgColor: 'blackAlpha.300',
    animation: 'pulse',
  }),
  scales: {
    variants: {
      text: () => ({
        transform: 'scale(1, 0.60)',
        marginTop: 0,
        borderRadius: '4px',
        marginBottom: 0,
        transformOrigin: '0 60%',
      }),
      circle: () => ({
        borderRadius: '50%',
      }),
      square: () => ({}),
    },
  },
};
