import { ColorMode } from '../ColorModeProvider';

type Props = {
  colorMode: ColorMode;
  [key: string]: any;
};

export function colorMode<T>(light: T, dark: T) {
  return (props: Props) => (props.colorMode === 'dark' ? dark : light);
}
