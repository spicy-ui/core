import * as React from 'react';
import { useField } from '../Field/Context';
import { StyledTextArea } from './styled';
import { TextAreaProps } from './types';

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

export { TextArea };
