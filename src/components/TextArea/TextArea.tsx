import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';

type TextAreaSizes = 'xs' | 'sm' | 'md' | 'lg';

type TextAreaVariants = 'outlined' | 'filled' | 'underlined' | 'unstyled';

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'width' | 'height' | 'size'>,
    SxProps {
  /** If `true`, the text area will be disabled. */
  isDisabled?: boolean;
  /** If `true`, the text area will be marked as invalid. */
  isInvalid?: boolean;
  /** If `true`, the text area will be read only. */
  isReadOnly?: boolean;
  /** If `true`, the text area will be required. */
  isRequired?: boolean;
  /** Resize mode of the text area. */
  resize?: 'horizontal' | 'vertical' | 'both' | 'none';
  /** Size of the text area. */
  size?: LiteralUnion<TextAreaSizes>;
  /** Variant of the text area. */
  variant?: LiteralUnion<TextAreaVariants>;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { children, sx, isDisabled, isInvalid, isReadOnly, isRequired, resize, size, variant, ...rest } = props;

  const styles = useComponentStyles('TextArea', props);

  return (
    <Box
      as="textarea"
      ref={ref}
      disabled={isDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      resize={resize}
      sx={styles}
      {...rest}
    />
  );
});

TextArea.defaultProps = {
  resize: 'vertical',
  size: 'md',
  variant: 'outlined',
};

TextArea.displayName = 'TextArea';
