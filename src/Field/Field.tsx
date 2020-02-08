import * as React from 'react';
import { Box } from '../Box';
import { FieldControl, FieldErrorText, FieldHelperText, FieldLabel, FieldRequired } from './styled';

interface FieldContextProps {
  id?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

const FieldContext = React.createContext<FieldContextProps>({});

export const useField = () => {
  const context = React.useContext(FieldContext);

  return context;
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
}) => {
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
        <FieldControl isInvalid={isInvalid}>{children}</FieldControl>
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

Field.displayName = 'Field';

Field.defaultProps = {};

export default Field;
