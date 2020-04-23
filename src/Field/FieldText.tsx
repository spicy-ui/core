import * as React from 'react';
import { Box } from '../Box';
import { FieldHelperText } from './styled';

interface FieldTextProps {
  isInvalid?: boolean;
  errorText: React.ReactNode;
  helperText: React.ReactNode;
}

export const FieldText: React.FC<FieldTextProps> = ({ isInvalid, errorText, helperText }) => {
  if (errorText || helperText) {
    if (isInvalid) {
      return (
        <Box mt="sm">
          <FieldHelperText isError>{errorText || helperText}</FieldHelperText>
        </Box>
      );
    }

    if (helperText) {
      return (
        <Box mt="sm">
          <FieldHelperText>{helperText}</FieldHelperText>
        </Box>
      );
    }
  }

  return null;
};
