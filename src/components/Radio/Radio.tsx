import * as React from 'react';
import { useComponentStyles } from '../../system';
import { ColorScales } from '../../theme';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Text } from '../Text';

export type RadioColors = ColorScales;

export type RadioSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height' | 'size'> {
  /** Radio label. */
  label?: string;
  /** If `true`, the radio will be disabled. */
  isDisabled?: boolean;
  /** If `true`, the radio will be marked as invalid. */
  isInvalid?: boolean;
  /** Color of the radio. */
  color?: LiteralUnion<RadioColors>;
  /** Size of the checkbox. */
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
        ref={ref}
        as="input"
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        data-checked={!checked ? undefined : checked}
        disabled={isDisabled}
        sx={inputStyles}
        {...rest}
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
