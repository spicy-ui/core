import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { CloseButton, CloseButtonProps } from '..';

export default {
  title: 'Close Button',
  component: CloseButton,
} as Meta<CloseButtonProps>;

export const Simple: Story<CloseButtonProps> = (props) => <CloseButton {...props} />;
