import { useColorMode } from '../ColorModeProvider';

export const withColorMode = (fn: Function) => (p: any) => {
  const { colorMode } = useColorMode();
  return fn({ ...p, colorMode });
};
