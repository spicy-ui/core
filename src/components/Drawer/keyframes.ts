import { keyframes } from 'styled-components';

export const TopIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -25%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TopOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translate(0, -25%);
  }
`;

export const RightIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(25%, 0);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const RightOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translate(25%, 0);
  }
`;

export const LeftIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-25%, 0);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const LeftOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translate(-25%, 0);
  }
`;

export const BottomIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 25%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BottomOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 25%);
  }
`;
