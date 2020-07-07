import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { FieldContext } from './Context';

// TODO: consider changing text/box components to styled components with baseStyles so they're restylable

interface HelperTextProps {
  errorText?: React.ReactNode;
  helperText?: React.ReactNode;
  isInvalid?: boolean;
}

const HelperText: React.FC<HelperTextProps> = ({ errorText, helperText, isInvalid }) => {
  if (errorText || helperText) {
    if (isInvalid) {
      return (
        <Text as="div" mt="1" color={isInvalid ? 'red.600' : 'inherit'} fontSize="sm">
          {errorText || helperText}
        </Text>
      );
    }

    if (helperText) {
      return (
        <Text as="div" mt="1" fontSize="sm">
          {helperText}
        </Text>
      );
    }
  }

  return null;
};

export interface FieldProps {
  errorText?: React.ReactNode;
  helperText?: React.ReactNode;
  id: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  label?: string;
}

const Field: React.FC<FieldProps> = ({
  children,
  errorText,
  helperText,
  id,
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  label,
}) => (
  <FieldContext.Provider value={{ id, isDisabled, isInvalid, isReadOnly, isRequired }}>
    <Box>
      {label && (
        <Box mb="1">
          <Text as="label" htmlFor={id} fontWeight="medium" lineHeight="normal">
            {label}
            {isRequired && (
              <Text as="span" ml="1" color="red.600">
                *
              </Text>
            )}
          </Text>
        </Box>
      )}
      <Box>{children}</Box>
      <HelperText errorText={errorText} helperText={helperText} isInvalid={isInvalid} />
    </Box>
  </FieldContext.Provider>
);

Field.displayName = 'Field';

export { Field };
