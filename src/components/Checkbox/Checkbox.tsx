import * as React from 'react';
import { useComponentStyles } from '../../hooks';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Text } from '../Text';

type CheckboxSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height' | 'size'> {
  label?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  size?: LiteralUnion<CheckboxSizes>;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { id, name, value, label, checked, isDisabled, isInvalid, color, size, ...rest } = props;

  const outerStyles = useComponentStyles('CheckboxOuter', props);
  const inputStyles = useComponentStyles('CheckboxInput', props);
  const labelStyles = useComponentStyles('CheckboxLabel', props);

  return (
    <Box as="label" htmlFor={id} sx={outerStyles}>
      <Box
        as="input"
        type="checkbox"
        ref={ref}
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        data-checked={!checked ? undefined : checked}
        disabled={isDisabled}
        {...rest}
        sx={inputStyles}
      />
      {label && (
        <Text as="div" fontSize="inherit" lineHeight="inherit" sx={labelStyles}>
          {label}
        </Text>
      )}
    </Box>
  );
});

Checkbox.defaultProps = {
  color: 'blue',
  size: 'md',
};

Checkbox.displayName = 'Checkbox';
