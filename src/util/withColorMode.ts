import { useColorMode } from '../ColorModeProvider';

// eslint-disable-next-line @typescript-eslint/ban-types
export const withColorMode = (fn: Function) => (p: any) => {
  const { colorMode } = useColorMode();
  return fn({ ...p, colorMode });
};
