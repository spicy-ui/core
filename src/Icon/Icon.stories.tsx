import * as feather from 'feather-icons';
import * as React from 'react';
import { uid } from 'react-uid';
import { Box, Flex, Grid, Icon, IconProps, Text } from '../';

export default {
  title: 'Icon',
  component: Icon,
};

export const Simple = () => <Icon name="help-circle" />;

export const AllIcons = () => (
  <Box mx="auto" maxWidth="960px">
    <Grid gap="base" templateColumns="repeat(6, 1fr)">
      {Object.keys(feather.icons).map((name, idx) => (
        <Flex
          key={uid(name, idx)}
          justify="center"
          direction="column"
          p="base"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="sm"
        >
          <Box mb="xs" textAlign="center">
            <Icon name={name as IconProps['name']} />
          </Box>
          <Text textAlign="center">
            <code>{name}</code>
          </Text>
        </Flex>
      ))}
    </Grid>
  </Box>
);
