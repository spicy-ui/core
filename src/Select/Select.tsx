import * as React from 'react';
import { SpaceProps, WidthProps } from 'styled-system';
import { useField } from '../Field/Context';
import { StyledSelect } from './styled';

export type SelectSpace = 'xs' | 'sm' | 'md' | 'lg';

export type SelectVariant = 'outlined' | 'filled' | 'unstyled';

export interface SelectProps extends SpaceProps, WidthProps {
  /** If `true` the select will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Size of the select. */
  space?: SelectSpace;
  /** Variant style of the select. */
  variant?: SelectVariant;
}

const Select: React.FC<SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({ ...rest }) => {
  const { id, isDisabled, isReadOnly, isRequired } = useField();

  const props = {
    id,
    name: id,
    disabled: isDisabled,
    readOnly: isReadOnly,
    require: isRequired,
  };

  return <StyledSelect {...props} {...rest} />;
};

Select.defaultProps = {
  fullWidth: true,
  space: 'md',
  variant: 'outlined',
};

Select.displayName = 'Select';

export default Select;
