import * as React from 'react';
import { useComponentStyles } from '../../hooks';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Text } from '../Text';

type RadioSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height' | 'size'> {
  label?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  color?: string;
  size?: LiteralUnion<RadioSizes>;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { id, name, value, label, checked, isDisabled, isInvalid, color, size, ...rest } = props;

  const outerStyles = useComponentStyles('RadioOuter', props);
  const inputStyles = useComponentStyles('RadioInput', props);
  const labelStyles = useComponentStyles('RadioLabel', props);

  return (
    <Box as="label" htmlFor={id} sx={outerStyles}>
      <Box
        as="input"
        type="radio"
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

Radio.defaultProps = {
  color: 'blue',
  size: 'md',
};

Radio.displayName = 'Radio';
