import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Input, InputSpace, InputVariant } from '../';

const inputSpaces: InputSpace[] = ['sm', 'base', 'lg'];

const inputTypes = [
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

const inputVariants: InputVariant[] = ['outline', 'filled', 'unstyled'];

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Input
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', true)}
    placeholder={text('placeholder', 'Simple input')}
    readOnly={boolean('readOnly', false)}
    required={boolean('required', false)}
    space={select('space', inputSpaces, 'base')}
    type={select('type', inputTypes, 'text')}
    variant={select('variant', inputVariants, 'outline')}
  />
);

export const AllSpaces = () => (
  <>
    {inputSpaces.map((space, idx) => (
      <div key={uid(space, idx)}>
        <Input space={space} placeholder={space} />
      </div>
    ))}
  </>
);

export const AllVariants = () => (
  <>
    {inputVariants.map((variant, idx) => (
      <div key={uid(variant, idx)}>
        <Input variant={variant} placeholder={variant} />
      </div>
    ))}
  </>
);
