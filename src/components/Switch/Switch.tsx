import * as React from 'react';
import { useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';

type SwitchSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height' | 'size'> {
  label?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  size?: LiteralUnion<SwitchSizes>;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { id, name, value, label, checked, isDisabled, isInvalid, color, size, ...rest } = props;

  const outerStyles = useComponentStyles('SwitchOuter', props);
  const inputStyles = useComponentStyles('SwitchInput', props);
  const toggleStyles = useComponentStyles('SwitchToggle', props);

  return (
    <Box as="label" htmlFor={id} sx={outerStyles}>
      <Box
        ref={ref}
        as="input"
        type="checkbox"
        role="switch"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        data-checked={!checked ? undefined : checked}
        disabled={isDisabled}
        {...rest}
        sx={inputStyles}
      />
      <Box data-checked={!checked ? undefined : checked} sx={toggleStyles} />
    </Box>
  );
});

Switch.defaultProps = {
  color: 'blue',
  size: 'md',
};

Switch.displayName = 'Switch';
