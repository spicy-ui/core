import * as React from 'react';
import { Box } from '../Box';
import { useColorMode } from '../ColorMode';
import { FieldContext } from './Context';
import { FieldControl, FieldErrorText, FieldHelperText, FieldLabel, FieldRequired } from './styled';

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
}) => {
  const { mode: colorMode } = useColorMode();

  return (
    <FieldContext.Provider value={{ id, isDisabled, isInvalid, isReadOnly, isRequired }}>
      <Box>
        {label && (
          <Box mb="xs">
            <FieldLabel htmlFor={id}>
              {label}
              {isRequired && <FieldRequired>*</FieldRequired>}
            </FieldLabel>
          </Box>
        )}
        <FieldControl isInvalid={isInvalid} colorMode={colorMode}>
          {children}
        </FieldControl>
        {isInvalid
          ? (errorText || helperText) && (
              <Box mt="sm">
                <FieldErrorText>{errorText || helperText}</FieldErrorText>
              </Box>
            )
          : helperText && (
              <Box mt="sm">
                <FieldHelperText>{helperText}</FieldHelperText>
              </Box>
            )}
      </Box>
    </FieldContext.Provider>
  );
};

Field.defaultProps = {};

Field.displayName = 'Field';

export default Field;
