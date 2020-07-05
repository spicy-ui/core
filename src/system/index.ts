import { DeepPartial } from 'utility-types';
import { components } from './components';
import { foundations } from './foundations';
import { styles } from './styles';

const config = {
  initialColorMode: 'light',
};

export const system = {
  ...foundations,
  components,
  styles,
  config,
};

export * from './types';

export type System = typeof system;

export type ExtendableSystem = DeepPartial<System> & { [key: string]: any };
