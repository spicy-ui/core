/* eslint-disable @typescript-eslint/no-shadow, @typescript-eslint/naming-convention */

declare module '@styled-system/should-forward-prop' {
  // Fix: didn't support number type prop arg
  type genericShouldForwardProp = (prop: string | number) => boolean;

  export const props: string[];
  export function createShouldForwardProp(props: string[]): genericShouldForwardProp;

  const shouldForwardProp: genericShouldForwardProp;
  export default shouldForwardProp;
}
