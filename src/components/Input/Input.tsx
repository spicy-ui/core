import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';

type InputSizes = 'xs' | 'sm' | 'md' | 'lg';

type InputVariants = 'outlined' | 'filled' | 'underlined' | 'unstyled';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height' | 'size'>,
    SxProps {
  as?: string | React.ComponentType<any>;
  /** If `true`, the input will be disabled. */
  isDisabled?: boolean;
  /** If `true`, the input will be marked as invalid. */
  isInvalid?: boolean;
  /** If `true`, the input will be read only. */
  isReadOnly?: boolean;
  /** If `true`, the input will be required. */
  isRequired?: boolean;
  /** Size of the input. */
  size?: LiteralUnion<InputSizes>;
  /** Variant of the input. */
  variant?: LiteralUnion<InputVariants>;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { children, sx, isDisabled, isInvalid, isReadOnly, isRequired, size, variant, ...rest } = props;

  const styles = useComponentStyles('Input', props);

  return (
    <Box as="input" ref={ref} disabled={isDisabled} readOnly={isReadOnly} required={isRequired} sx={styles} {...rest}>
      {children}
    </Box>
  );
});

Input.defaultProps = {
  size: 'md',
  type: 'text',
  variant: 'outlined',
};

Input.displayName = 'Input';
