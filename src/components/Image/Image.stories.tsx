import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Image, ImageProps, Spinner } from '..';

export default {
  title: 'Image',
  component: Image,
} as Meta<ImageProps>;

export const Usage: Story<ImageProps> = (props) => <Image {...props} />;
Usage.args = {
  src: 'https://source.unsplash.com/random/256x256?mountain',
  alt: 'Random unsplash image',
};

export const Fallback: Story<ImageProps> = (props) => <Image {...props} />;
Fallback.args = {
  src: 'https://source.unsplash.com/random/256x256?city',
  fallbackSrc: 'https://via.placeholder.com/256',
  alt: 'Random unsplash image',
};

export const FallbackComponent: Story<ImageProps> = (props) => <Image {...props} fallback={<Spinner />} />;
FallbackComponent.args = {
  src: 'https://source.unsplash.com/random/256x256?forest',
  alt: 'Random unsplash image',
};
