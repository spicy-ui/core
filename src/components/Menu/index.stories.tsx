import * as React from 'react';
import { uid } from 'react-uid';
import { Box, Button, Flex, Menu, MenuDivider, MenuHeader, MenuItem, Popover, Text } from '..';

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    zIndex: { table: { disable: true } },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
  subcomponents: {
    MenuDivider,
    MenuHeader,
    MenuItem,
  },
};

export const Simple = () => (
  <Box maxWidth="56">
    <Menu>
      <MenuItem>View</MenuItem>
      <MenuItem>Share</MenuItem>
      <MenuItem>Download</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  </Box>
);

export const WithDividers = () => (
  <Box maxWidth="56">
    <Menu>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuDivider />
      <MenuItem>Delete</MenuItem>
      <MenuItem>Rename</MenuItem>
      <MenuDivider />
      <MenuItem>Properties</MenuItem>
    </Menu>
  </Box>
);

export const WithHeaders = () => (
  <Box maxWidth="56">
    <Menu>
      <MenuHeader>Sort by</MenuHeader>
      <MenuItem>Alphabetical</MenuItem>
      <MenuItem>Date created</MenuItem>
      <MenuItem>Last viewed</MenuItem>
      <MenuDivider />
      <MenuHeader>Order</MenuHeader>
      <MenuItem>Ascending</MenuItem>
      <MenuItem>Descending</MenuItem>
    </Menu>
  </Box>
);

export const WithPopover = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = React.useCallback(() => setIsOpen(false), []);
  const toggleOpen = React.useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      trigger={<Button onClick={toggleOpen}>Menu Trigger</Button>}
      offset={[0, 8]}
      closeOnOuterClick
    >
      <Menu>
        <MenuItem onClick={onClose}>Profile</MenuItem>
        <MenuItem onClick={onClose}>Friends</MenuItem>
        <MenuDivider />
        <MenuItem onClick={onClose}>Settings</MenuItem>
        <MenuItem onClick={onClose}>Sign out</MenuItem>
      </Menu>
    </Popover>
  );
};

export const WithCustomItems = () => (
  <Box maxWidth="56">
    <Menu>
      <MenuItem>
        <Flex minHeight="16" direction="column" justify="center" flex="1 1 auto">
          <Text>Signed in as</Text>
          <Text fontWeight="semibold">John Brown</Text>
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
    <Box mt="8" />
    <Menu>
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
  </Box>
);
