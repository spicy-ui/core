import * as React from 'react';
import { Text, Progress } from '..';

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {},
};

export const Horizontal = (props: any) => <Progress {...props} />;
Horizontal.args = {
  value: 43,
};

export const WithHorizontalInner = (props: any) => {
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

export const Circular = (props: any) => <Progress {...props} />;
Circular.args = {
  isCircular: true,
  value: 43,
};

export const WithCircularInner = (props: any) => {
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
WithCircularInner.args = {
  isCircular: true,
  value: 43,
};
