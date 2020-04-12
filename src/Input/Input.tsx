import * as React from 'react';
import { SpaceProps, WidthProps } from 'styled-system';
import { useField } from '../Field/Context';
import { StyledInput } from './styled';

export type InputSpace = 'xs' | 'sm' | 'md' | 'lg';

export type InputVariant = 'outlined' | 'filled' | 'unstyled';

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
  space: 'md',
  type: 'text',
  variant: 'outlined',
};

Input.displayName = 'Input';

export default Input;
