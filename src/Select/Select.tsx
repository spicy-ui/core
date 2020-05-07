import * as React from 'react';
import { useField } from '../Field/Context';
import { StyledSelect } from './styled';
import { SelectProps } from './types';

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

export { Select };
