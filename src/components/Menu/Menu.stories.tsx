import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { uid } from 'react-uid';
import { Avatar, Box, Button, Flex, Menu, MenuDivider, MenuHeader, MenuItem, MenuProps, Stack, Text } from '..';

export default {
  title: 'Menu',
  component: Menu,
  subcomponents: { MenuHeader, MenuDivider, MenuItem },
} as Meta<MenuProps>;

export const Usage: Story<MenuProps> = (props) => (
  <Box h={56}>
    <Menu {...props} trigger={<Button iconAfter={<HiChevronDown />}>Open</Button>}>
      <MenuItem onClick={action('view')}>View</MenuItem>
      <MenuItem onClick={action('share')}>Share</MenuItem>
      <MenuItem onClick={action('download')}>Download</MenuItem>
      <MenuItem onClick={action('delete')}>Delete</MenuItem>
    </Menu>
  </Box>
);

export const OpenOnHover: Story<MenuProps> = (props) => (
  <Box h={56}>
    <Menu {...props} isOpenOnHover trigger={<Button iconAfter={<HiChevronDown />}>Open</Button>}>
      <MenuItem onClick={action('view')}>View</MenuItem>
      <MenuItem onClick={action('share')}>Share</MenuItem>
      <MenuItem onClick={action('download')}>Download</MenuItem>
      <MenuItem onClick={action('delete')}>Delete</MenuItem>
    </Menu>
  </Box>
);

export const Dividers: Story<MenuProps> = (props) => (
  <Menu {...props} trigger={<Button iconAfter={<HiChevronDown />}>Actions</Button>}>
    <MenuItem onClick={action('cut')}>Cut</MenuItem>
    <MenuItem onClick={action('copy')}>Copy</MenuItem>
    <MenuItem onClick={action('paste')}>Paste</MenuItem>
    <MenuDivider />
    <MenuItem onClick={action('delete')}>Delete</MenuItem>
    <MenuItem onClick={action('rename')}>Rename</MenuItem>
    <MenuDivider />
    <MenuItem onClick={action('properties')}>Properties</MenuItem>
  </Menu>
);

export const Headers: Story<MenuProps> = (props) => (
  <Menu {...props} trigger={<Button iconAfter={<HiChevronDown />}>Filter</Button>}>
    <MenuHeader>Sort by</MenuHeader>
    <MenuItem onClick={action('alphabetical')}>Alphabetical</MenuItem>
    <MenuItem onClick={action('date-created')}>Date created</MenuItem>
    <MenuItem onClick={action('last-viewed')}>Last viewed</MenuItem>
    <MenuDivider />
    <MenuHeader>Order</MenuHeader>
    <MenuItem onClick={action('ascending')}>Ascending</MenuItem>
    <MenuItem onClick={action('descending')}>Descending</MenuItem>
  </Menu>
);

export const InternalState: Story<MenuProps> = (props) => (
  <Menu {...props} trigger={({ isOpen }) => <Button iconAfter={<HiChevronDown />}>{isOpen ? 'Close' : 'Open'}</Button>}>
    {({ isOpen }) => <pre>{JSON.stringify({ isOpen })}</pre>}
  </Menu>
);

export const CustomItems: Story<MenuProps> = (props) => (
  <Stack spacing={8} direction="column">
    <Menu {...props} trigger={<Avatar name="Dwight Schrute" />}>
      <MenuItem>
        <Flex minHeight="16" direction="column" justify="center" flex="1 1 auto">
          <Text>Signed in as</Text>
          <Text fontWeight="semibold">Dwight Schrute</Text>
        </Flex>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text mr="auto">Your profile</Text>
        <span>📛</span>
      </MenuItem>
      <MenuItem>
        <Text mr="auto">Your repositories</Text>
        <span>🗃️</span>
      </MenuItem>
      <MenuItem>
        <Text mr="auto">Your stars</Text>
        <span>⭐</span>
      </MenuItem>
      <MenuDivider />
      <MenuItem>
        <Text mr="auto">Settings</Text>
        <span>⚙️</span>
      </MenuItem>
      <MenuItem>
        <Text mr="auto">Sign out</Text>
        <span>🏃‍♂️</span>
      </MenuItem>
    </Menu>
    <Menu trigger={<Button iconAfter={<HiChevronDown />}>Menu</Button>}>
      {[
        { text: 'Cut', kdb: 'Ctrl + X' },
        { text: 'Copy', kdb: 'Ctrl + C' },
        { text: 'Paste', kdb: 'Ctrl + V' },
      ].map((item, idx) => (
        <MenuItem key={uid(item, idx)}>
          <Flex direction="row" align="center" flex="1 1 auto">
            <Text mr="auto">{item.text}</Text>
            <Text color="gray.500" fontSize="sm">
              {item.kdb}
            </Text>
          </Flex>
        </MenuItem>
      ))}
    </Menu>
  </Stack>
);
