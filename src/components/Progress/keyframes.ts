import { keyframes } from 'styled-components';

export const IndeterminateHorizontalProgress = keyframes`
  0% {
    margin-left: 0;
    margin-right: 100%;
  }

  50% {
    margin-left: 25%;
    margin-right: 0;
  }

  100% {
    margin-left: 100%;
    margin-right: 0%;
  }
`;
