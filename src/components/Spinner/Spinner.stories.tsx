import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Spinner, SpinnerProps } from '..';

export default {
  title: 'Spinner',
  component: Spinner,
} as Meta<SpinnerProps>;

export const Usage: Story<SpinnerProps> = (props) => <Spinner {...props} />;
