import { css, keyframes } from 'styled-components';

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

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const animationKeyframes = css`
  ${bounce}
  ${ping}
  ${pulse}
  ${spin}
`;

const name = {
  bounce: bounce.getName(),
  ping: ping.getName(),
  pulse: pulse.getName(),
  spin: spin.getName(),
};

const duration = {};

const timingFn = {};

const delay = {};

export const animation = {
  animation: {
    bounce: `${name.bounce} 1s infinite`,
    ping: `${name.ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
    pulse: `${name.pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
    spin: `${name.spin} 1s linear infinite`,
  },
  name,
  duration,
  timingFn,
  delay,
};
