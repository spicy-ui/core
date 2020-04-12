import * as React from 'react';
import { SpaceProps, WidthProps } from 'styled-system';
import { useField } from '../Field/Context';
import { StyledTextArea } from './styled';

export type TextAreaSpace = 'xs' | 'sm' | 'md' | 'lg';

export type TextAreaVariant = 'outlined' | 'filled' | 'unstyled';

export interface TextAreaProps extends SpaceProps, WidthProps {
  /** If `true` the text area will grow to the full width of it's container. */
  fullWidth?: boolean;
  /** Size of the text area. */
  space?: TextAreaSpace;
  /** Variant style of the text area. */
  variant?: TextAreaVariant;
}

const TextArea: React.FC<TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ ...rest }) => {
  const { id, isDisabled, isReadOnly, isRequired } = useField();

  const props = {
    id,
    name: id,
    disabled: isDisabled,
    readOnly: isReadOnly,
    require: isRequired,
  };

  return <StyledTextArea {...props} {...rest} />;
};

TextArea.defaultProps = {
  fullWidth: true,
  space: 'md',
  variant: 'outlined',
  rows: 1,
};

TextArea.displayName = 'Input';

export default TextArea;
