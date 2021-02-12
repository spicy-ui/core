import { ContainerProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Container: ComponentThemeConfig<ContainerProps> = {
  baseStyle: ({ isCentered }) => ({
    mx: 'auto',
    px: 4,
    w: 'full',
    ...(isCentered ? { d: 'flex', flexDirection: 'column', alignItems: 'center' } : {}),
  }),
};
