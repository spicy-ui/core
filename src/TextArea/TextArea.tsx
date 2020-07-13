import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import { useField } from '../Field';
import { baseStyle, size, transition, TransitionProps, variant, withColorMode } from '../util';

interface StyledTextAreaProps {
  isInvalid?: boolean;
  space?: string;
  variant?: string;
}

const StyledTextArea = styled('textarea').withConfig<StyledTextAreaProps>({
  shouldForwardProp: createShouldForwardProp([
    ...props,
    'isInvalid',
    'space',
    'variant',
    'transitionProperty',
    'transitionDuration',
    'transitionTiming',
    'transitionDelay',
  ]),
})((p) =>
  css({
    ...withColorMode(baseStyle('components.TextArea'))(p),
    ...withColorMode(size('components.TextArea', 'space'))(p),
    ...width(p),
    ...space(p),
    ...transition(p),
    ...withColorMode(variant('components.TextArea'))(p),
  }),
);

export interface TextAreaProps extends SpaceProps, WidthProps, TransitionProps {
  /** Indicate whether the text area has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the text area. */
  space?: string;
  /** Variant style of the text area. */
  variant?: string;
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

  const selectProps = {
    id: id || field.id,
    name: name || id || field.id,
    disabled: disabled || field.isDisabled,
    isInvalid: isInvalid || field.isInvalid,
    readOnly: readOnly || field.isReadOnly,
    required: required || field.isRequired,
  };

  return <StyledTextArea {...rest} {...selectProps} />;
};

TextArea.defaultProps = {
  isInvalid: false,
  space: 'md',
  rows: 1,
  variant: 'outlined',
};

TextArea.displayName = 'TextArea';

export { TextArea };
