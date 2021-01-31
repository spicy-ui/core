import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Avatar } from './Avatar';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

export default {
  title: 'AvatarGroup',
  component: AvatarGroup,
} as Meta<AvatarGroupProps>;

export const Simple: Story<AvatarGroupProps> = (props) => (
  <AvatarGroup {...props}>
    <Avatar name="Michael Scott" />
    <Avatar name="Dwight Schrute" />
    <Avatar name="Jim Halpert" />
    <Avatar name="Pam Beesly" />
    <Avatar name="Ryan Howard" />
    <Avatar name="Andy Bernard" />
  </AvatarGroup>
);
Simple.args = { max: 3 };
