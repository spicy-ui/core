import * as React from 'react';
import { SpaceProps, WidthProps } from 'styled-system';
import { useField } from '../Field/Context';
import { StyledTextArea } from './styled';

export type TextAreaSpace = 'xs' | 'sm' | 'md' | 'lg';

export type TextAreaVariant = 'outlined' | 'filled' | 'unstyled';

export interface TextAreaProps extends SpaceProps, WidthProps {
  /** If `true` the text area will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Indicate whether the textarea has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the text area. */
  space?: TextAreaSpace;
  /** Variant style of the text area. */
  variant?: TextAreaVariant;
}

const TextArea: React.FC<TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  id,
  name,
  disabled,
  isInvalid,
  readOnly,
  required,
  ...rest
}) => {
  const field = useField();

  const props = {
    id: id || field.id,
    name: name || id || field.id,
    disabled: disabled || field.isDisabled,
    isInvalid: isInvalid || field.isInvalid,
    readOnly: readOnly || field.isReadOnly,
    required: required || field.isRequired,
  };

  return <StyledTextArea {...props} {...rest} />;
};

TextArea.defaultProps = {
  fullWidth: true,
  isInvalid: false,
  space: 'md',
  variant: 'outlined',
  rows: 1,
};

TextArea.displayName = 'Input';

export default TextArea;
