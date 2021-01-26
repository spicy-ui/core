import { css, keyframes } from 'styled-components';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }
`;

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
  }
`;

export const keyframeCss = css`
  ${spin}
  ${ping}
  ${pulse}
  ${bounce}
`;

export const animations = {
  animationNames: {
    spin: spin.getName(),
    ping: ping.getName(),
    pulse: pulse.getName(),
    bounce: bounce.getName(),
  },
  animations: {
    spin: `${spin.getName()} 1s linear infinite`,
    ping: `${ping.getName()} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
    pulse: `${pulse.getName()} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
    bounce: `${bounce.getName()} 1s infinite`,
  },
};
