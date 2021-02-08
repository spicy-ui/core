import * as React from 'react';
import styled from 'styled-components';
import { sxMixin, useComponentStyles } from '../../system';
import { Box } from '../Box';

const Svg = styled.svg(sxMixin);

const Circle = styled.circle(sxMixin);

export interface CircularProgressProps {
  angle?: number;
  children?: React.ReactNode;
  color?: string;
  isCapRound?: boolean;
  isIndeterminate?: boolean;
  max?: number;
  min?: number;
  size?: string;
  thickness?: number;
  trackColor?: string;
  value?: number;
}

export const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>((props, ref) => {
  const {
    children,
    angle = 0,
    color = 'blue.500',
    isCapRound = false,
    isIndeterminate = false,
    max = 100,
    min = 0,
    trackColor = 'gray.100',
    thickness = 1,
    value = 0,
    ...rest
  } = props;

  const rootStyles = useComponentStyles('ProgressCircular', props);
  const svgStyles = useComponentStyles('ProgressCircularSvg', props);
  const shapeStyles = useComponentStyles('ProgressCircularShape', props);
  const innerStyles = useComponentStyles('ProgressCircularInner', props);

  const percent = Math.min(Math.max(((value - min) * 100) / (max - min), min), max) / 100;

  return (
    <Box ref={ref} role="progressbar" sx={rootStyles} {...rest}>
      <Svg viewBox="0 0 100 100" sx={svgStyles}>
        <Circle
          cx={50}
          cy={50}
          r={42}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={8 * thickness}
          sx={{ ...shapeStyles, color: trackColor }}
        />
        <Circle
          cx={50}
          cy={50}
          r={42}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={8 * thickness}
          strokeLinecap={isCapRound ? 'round' : undefined}
          strokeDasharray={`${Math.PI * 42 * 2 * percent}, ${Math.PI * 42 * 2}`}
          transform={`rotate(${angle - 90}, 50, 50)`}
          sx={{ ...shapeStyles, color }}
        >
          {isIndeterminate && (
            <>
              <animate
                attributeName="stroke-dasharray"
                values="1,400;400,400;400,400"
                dur="2"
                repeatCount="indefinite"
              />
              <animate attributeName="stroke-dashoffset" values="0;-100;-260" dur="2" repeatCount="indefinite" />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="2"
                repeatCount="indefinite"
              />
            </>
          )}
        </Circle>
      </Svg>
      {children && <Box sx={innerStyles}>{children}</Box>}
    </Box>
  );
});

CircularProgress.defaultProps = {
  size: '48px',
};

CircularProgress.displayName = 'CircularProgress';
