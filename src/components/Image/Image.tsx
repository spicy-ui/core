import * as React from 'react';
import { useImage } from '../../hooks/useImage';
import { SxProps } from '../../system';
import { Box } from '../Box';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, SxProps {
  fallback?: React.ReactElement;
  fallbackSrc?: string;
  src?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ sx, crossOrigin, fallback, fallbackSrc, src, ...rest }, ref) => {
    const { status } = useImage(src, crossOrigin);

    const props = {
      ref,
      sx,
      ...rest,
    };

    if (status !== 'loaded') {
      if (fallback) {
        return fallback;
      }

      return <Box {...props} as="img" src={fallbackSrc} />;
    }

    return <Box {...props} as="img" src={src} />;
  },
);
