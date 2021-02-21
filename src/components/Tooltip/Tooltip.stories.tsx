import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Tooltip, TooltipProps } from '..';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as Meta<TooltipProps>;

export const Usage: Story<TooltipProps> = (props) => <Tooltip {...props}>Hover me</Tooltip>;
Usage.args = {
  label: "Hello, I'm a tooltip!",
};

export const Disabled: Story<TooltipProps> = (props) => <Tooltip {...props}>No tooltips here</Tooltip>;
Disabled.args = {
  isDisabled: true,
};
