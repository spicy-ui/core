import { keyframes } from 'styled-components';

export const TopLeftIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const TopLeftOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }

  
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const TopRightIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const TopRightOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }

  
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const BottomLeftIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const BottomLeftOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }

  
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const BottomRightIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const BottomRightOut = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }

  
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;
