/* eslint-disable no-shadow */

declare module '@styled-system/should-forward-prop' {
  type genericShouldForwardProp = (prop: string | number) => boolean;

  export const props: string[];
  export function createShouldForwardProp(props: string[]): genericShouldForwardProp;

  const shouldForwardProp: genericShouldForwardProp;
  export default shouldForwardProp;
}
