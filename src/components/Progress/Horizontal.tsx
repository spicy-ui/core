import * as React from 'react';
import { useComponentStyles } from '../../system';
import { AsProp, ChildrenProp } from '../../types';
import { Box } from '../Box';
import { ProgressAnimation, progressKeyframe } from './styled';

export interface HorizontalProgressProps extends AsProp, ChildrenProp {
  color?: string;
  isCapRound?: boolean;
  isIndeterminate?: boolean;
  max?: number;
  min?: number;
  trackColor?: string;
  value?: number;
}

export const HorizontalProgress = React.forwardRef<HTMLDivElement, HorizontalProgressProps>((props, ref) => {
  const { children, isIndeterminate = false, max = 100, min = 0, trackColor = 'gray.100', value = 0, ...rest } = props;

  const rootStyles = useComponentStyles('ProgressHorizontal', props);
  const indeterminateInnerStyles = useComponentStyles('ProgressHorizontalIndeterminateInner', props);
  const innerStyles = useComponentStyles('ProgressHorizontalInner', props);

  return (
    <Box ref={ref} role="progressbar" bg={trackColor} height={4} sx={rootStyles} {...rest}>
      {isIndeterminate ? (
        <>
          <ProgressAnimation />
          <Box animationName={progressKeyframe.getName()} sx={indeterminateInnerStyles} />
        </>
      ) : (
        <Box width={`${Math.min(Math.max(((value - min) * 100) / (max - min), min), max)}%`} sx={innerStyles}>
          {children}
        </Box>
      )}
    </Box>
  );
});

HorizontalProgress.defaultProps = {
  color: 'blue.500',
};

HorizontalProgress.displayName = 'HorizontalProgress';
