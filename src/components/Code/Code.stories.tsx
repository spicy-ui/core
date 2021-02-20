import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Code, CodeProps } from '..';
import { CodeColors, CodeVariants } from './Code';

const codeColors: CodeColors[] = [
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

const codeVariants: CodeVariants[] = ['outline', 'solid', 'subtle'];

export default {
  title: 'Code',
  component: Code,
} as Meta<CodeProps>;

export const Usage: Story<CodeProps> = (props) => <Code {...props}>console.log(&apos;hello world!&apos;)</Code>;

export const Colors: Story<CodeProps> = (props) => (
  <table>
    <thead>
      <tr>
        <th>&nbsp;</th>
        {codeVariants.map((variant, idx) => (
          <th key={uid(variant, idx)}>
            <code>{variant}</code>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {codeColors.map((color, idx) => (
        <tr key={uid(color, idx)}>
          <td>
            <code>{color}</code>
          </td>
          {codeVariants.map((variant, idy) => (
            <td key={uid(variant, idy)}>
              <Code {...props} color={color} variant={variant}>
                console.log(&apos;hello world!&apos;)
              </Code>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
