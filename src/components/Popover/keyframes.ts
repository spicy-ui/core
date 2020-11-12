import { keyframes } from 'styled-components';

export const PopoverIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

export const PopoverOut = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`;
