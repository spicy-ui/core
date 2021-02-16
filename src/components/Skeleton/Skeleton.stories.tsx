import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Skeleton, SkeletonProps } from '..';

export default {
  title: 'Skeleton',
  component: Skeleton,
} as Meta<SkeletonProps>;

export const Simple: Story<SkeletonProps> = (props) => <Skeleton {...props} />;

export const Variants: Story<SkeletonProps> = () => (
  <>
    <Skeleton variant="text" />
    <Skeleton variant="circle" width="40px" height="40px" />
    <Skeleton variant="rect" width="210px" height="118px" />
  </>
);
