import * as React from 'react';
import { SpaceProps, WidthProps } from 'styled-system';
import { useField } from '../Field/Context';
import { StyledSelect } from './styled';

export type SelectSpace = 'xs' | 'sm' | 'md' | 'lg';

export type SelectVariant = 'outlined' | 'filled' | 'unstyled';

export interface SelectProps extends SpaceProps, WidthProps {
  /** If `true` the select will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Indicate whether the input has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the select. */
  space?: SelectSpace;
  /** Variant style of the select. */
  variant?: SelectVariant;
}

const Select: React.FC<SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  id,
  name,
  disabled,
  isInvalid,
  required,
  ...rest
}) => {
  const field = useField();

  const props = {
    id: id || field.id,
    name: name || id || field.id,
    disabled: disabled || field.isDisabled,
    isInvalid: isInvalid || field.isInvalid,
    required: required || field.isRequired,
  };

  return <StyledSelect {...props} {...rest} />;
};

Select.defaultProps = {
  fullWidth: true,
  isInvalid: false,
  space: 'md',
  variant: 'outlined',
};

Select.displayName = 'Select';

export default Select;
