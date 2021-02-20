import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Progress, ProgressProps, Text } from '..';

export default {
  title: 'Progress',
  component: Progress,
} as Meta<ProgressProps>;

export const Horizontal: Story<ProgressProps> = (props) => <Progress {...props} />;
Horizontal.args = {
  value: 43,
};

export const WithHorizontalInner: Story<ProgressProps> = (props) => {
  const { value = 0, min = 0, max = 100 } = props;
  const score = ((value - min) * 100) / (max - min);

  return (
    <Progress {...props}>
      <Text pr={1} color="white" fontSize="xs" lineHeight="100%">
        {score}%
      </Text>
    </Progress>
  );
};
WithHorizontalInner.args = {
  value: 43,
};

export const Circular: Story<ProgressProps> = (props) => <Progress {...props} />;
Circular.args = {
  isCircular: true,
  value: 43,
};

export const WithCircularInner: Story<ProgressProps> = (props) => {
  const { value = 0, min = 0, max = 100 } = props;
  const score = ((value - min) * 100) / (max - min);

  return (
    <Progress {...props}>
      <Text fontSize="xs" lineHeight="100%">
        {score}%
      </Text>
    </Progress>
  );
};
WithCircularInner.args = { isCircular: true, value: 43 };
