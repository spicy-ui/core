import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Avatar, Badge, BadgeColors, BadgeProps, BadgeVariants, Box, Flex, Text } from '..';

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

export const Usage: Story<BadgeProps> = (props) => <Badge {...props}>Success</Badge>;

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

export const Composition: Story<BadgeProps> = () => (
  <Flex>
    <Avatar src="https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png" />
    <Box ml="3">
      <Text fontWeight="bold">
        Michael Scott
        <Badge color="purple" sx={{ ml: 1 }}>
          New
        </Badge>
      </Text>
      <Text fontSize="sm">Regional Manager</Text>
    </Box>
  </Flex>
);

export const FontSize: Story<BadgeProps> = () => (
  <Text fontSize="xl" fontWeight="bold">
    Michael Scott
    <Badge color="purple" sx={{ ml: 1, fontSize: '0.8em' }}>
      New
    </Badge>
  </Text>
);
