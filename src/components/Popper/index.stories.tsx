import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { PopperProps, Popper } from '..';

export default {
  title: 'Popper',
  component: Popper,
} as Meta<PopperProps>;

export const Simple: Story<PopperProps> = (props) => (
  <Popper {...props} trigger={<button type="button">trigger</button>}>
    <div>children</div>
  </Popper>
);

export const InternalState: Story<PopperProps> = (props) => (
  <Popper {...props} trigger={<button type="button">trigger</button>}>
    {({ isOpen }) => <pre>{JSON.stringify({ isOpen })}</pre>}
  </Popper>
);
