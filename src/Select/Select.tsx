import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import { useField } from '../Field';
import { baseStyle, size, transition, TransitionProps, transitionProps, variant, withColorMode } from '../util';

const shouldForwardProp = createShouldForwardProp([...props, ...transitionProps, 'isInvalid', 'space', 'variant']);

const StyledSelect = styled('select').withConfig<SelectProps>({ shouldForwardProp })((p) =>
  css({
    ...withColorMode(baseStyle('components.Select'))(p),
    ...withColorMode(size('components.Select', 'space'))(p),
    ...withColorMode(variant('components.Select'))(p),
    ...width(p),
    ...space(p),
    ...transition(p),
  }),
);

export interface SelectProps extends SpaceProps, WidthProps, TransitionProps {
  /** Indicate whether the input has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the select. */
  space?: string;
  /** Variant style of the select. */
  variant?: string;
}

const Select: React.FC<SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  id,
  name,
  disabled,
  isInvalid,
  required,
  ...rest
}) => {
  const field = useField();

  const selectProps = {
    id: id || field.id,
    name: name || id || field.id,
    disabled: disabled || field.isDisabled,
    isInvalid: isInvalid || field.isInvalid,
    required: required || field.isRequired,
  };

  return <StyledSelect {...rest} {...selectProps} />;
};

Select.defaultProps = {
  isInvalid: false,
  space: 'md',
  variant: 'outlined',
};

Select.displayName = 'Select';

export { Select };
