import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { HiOutlineArchive, HiOutlinePaperAirplane, HiPlus } from 'react-icons/hi';
import { Box, Stack, Tag, TagAction, TagIconAfter, TagIconBefore, TagLabel, TagProps } from '..';

export default {
  title: 'Tag',
  component: Tag,
} as Meta<TagProps>;

export const Simple: Story<TagProps> = (props) => <Tag {...props}>Sample Tag</Tag>;

export const TextOverflow: Story<TagProps> = (props) => (
  <Box w="120px">
    <Tag {...props}>
      <TagLabel>This tag will overflow</TagLabel>
    </Tag>
  </Box>
);

export const Sizes: Story<TagProps> = (props) => (
  <Stack spacing={4} direction="row" align="center">
    {['sm', 'md', 'lg'].map((size) => (
      <Tag {...props} key={size} size={size}>
        Fuchsia
      </Tag>
    ))}
  </Stack>
);
Sizes.args = {
  color: 'fuchsia',
  variant: 'solid',
};

export const WithIconBefore: Story<TagProps> = (props) => (
  <Stack spacing={4} direction="row" align="center">
    {['sm', 'md', 'lg'].map((size) => (
      <Tag {...props} key={size} size={size}>
        <TagIconBefore icon={<HiOutlinePaperAirplane />} />
        <TagLabel>Red</TagLabel>
      </Tag>
    ))}
  </Stack>
);
WithIconBefore.args = {
  color: 'red',
};

export const WithIconAfter: Story<TagProps> = (props) => (
  <Stack spacing={4} direction="row" align="center">
    {['sm', 'md', 'lg'].map((size) => (
      <Tag {...props} key={size} size={size}>
        <TagLabel>Blue</TagLabel>
        <TagIconAfter icon={<HiOutlineArchive />} />
      </Tag>
    ))}
  </Stack>
);
WithIconAfter.args = {
  color: 'blue',
  variant: 'outline',
};

export const WithAction: Story<TagProps> = (props) => (
  <Stack spacing={4} direction="row" align="center">
    {['sm', 'md', 'lg'].map((size) => (
      <Tag {...props} key={size} size={size}>
        <TagLabel>Emerald</TagLabel>
        <TagAction onClick={action('tag')} />
      </Tag>
    ))}
  </Stack>
);
WithAction.args = {
  isRound: true,
  color: 'emerald',
  variant: 'solid',
};

export const WithCustomActionIcon: Story<TagProps> = (props) => (
  <Stack spacing={4} direction="row" align="center">
    {['sm', 'md', 'lg'].map((size) => (
      <Tag {...props} key={size} size={size}>
        <TagLabel>Yellow</TagLabel>
        <TagAction icon={<HiPlus />} onClick={action('tag')} />
      </Tag>
    ))}
  </Stack>
);
WithCustomActionIcon.args = {
  color: 'yellow',
};
