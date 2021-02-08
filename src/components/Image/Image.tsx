import * as React from 'react';
import { useImage } from '../../hooks/useImage';
import { SxProps, useComponentStyles } from '../../system';
import { Box } from '../Box';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, SxProps {
  fallback?: React.ReactElement;
  fallbackSrc?: string;
  src?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { sx, crossOrigin, fallback, fallbackSrc, src, ...rest } = props;

  const { status } = useImage(src, crossOrigin);

  const styles = useComponentStyles('Image', props);

  const shared = {
    ref,
    sx: styles,
    ...rest,
  };

  if (status !== 'loaded') {
    if (fallback) {
      return fallback;
    }

    return <Box {...shared} as="img" src={fallbackSrc} />;
  }

  return <Box {...shared} as="img" src={src} />;
});

Image.displayName = 'Image';
