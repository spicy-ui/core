import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Badge, BadgeProps, BadgeVariants } from '..';
import { BadgeColors } from './Badge';

const badgeColors: BadgeColors[] = [
  'blueGray',
  'coolGray',
  'gray',
  'trueGray',
  'warmGray',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'lightBlue',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'whiteAlpha',
  'blackAlpha',
];

const badgeVariants: BadgeVariants[] = ['outline', 'solid', 'subtle'];

export default {
  title: 'Badge',
  component: Badge,
} as Meta<BadgeProps>;

export const Simple: Story<BadgeProps> = (props) => <Badge {...props}>Success</Badge>;

export const Colors: Story<BadgeProps> = (props) => (
  <table>
    <thead>
      <tr>
        <th>&nbsp;</th>
        {badgeVariants.map((variant, idx) => (
          <th key={uid(variant, idx)}>
            <code>{variant}</code>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {badgeColors.map((color, idx) => (
        <tr key={uid(color, idx)}>
          <td>
            <code>{color}</code>
          </td>
          {badgeVariants.map((variant, idy) => (
            <td key={uid(variant, idy)}>
              <Badge {...props} color={color} variant={variant}>
                Badge
              </Badge>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
