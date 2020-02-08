import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { SpaceProps, WidthProps } from 'styled-system';
import { useField } from '../Field';
import { StyledInput } from './styled';

export type InputSpace = keyof DefaultTheme['componentStyles']['inputs']['spaces'];

export type InputVariant = keyof DefaultTheme['componentStyles']['inputs']['variants'];

export interface InputProps extends SpaceProps, WidthProps {
  /** If `true` the input will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Size of the input. */
  space?: InputSpace;
  /** Variant style of the input. */
  variant?: InputVariant;
}

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
  const { id, isDisabled, isReadOnly, isRequired } = useField();

  const props = {
    id,
    name: id,
    disabled: isDisabled,
    readOnly: isReadOnly,
    require: isRequired,
  };

  return <StyledInput {...props} {...rest} />;
};

Input.defaultProps = {
  fullWidth: true,
  space: 'base',
  type: 'text',
  variant: 'outline',
};

Input.displayName = 'Input';

export default Input;
