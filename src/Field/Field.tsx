import * as React from 'react';
import { Box } from '../Box';
import { FieldContext } from './Context';
import { FieldText } from './FieldText';
import { FieldControl, FieldLabel, FieldRequired } from './styled';
import { FieldProps } from './types';

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
        <Box mb="xs">
          <FieldLabel htmlFor={id}>
            {label}
            {isRequired && <FieldRequired>*</FieldRequired>}
          </FieldLabel>
        </Box>
      )}
      <FieldControl>{children}</FieldControl>
      <FieldText isInvalid={isInvalid} errorText={errorText} helperText={helperText} />
    </Box>
  </FieldContext.Provider>
);

Field.defaultProps = {};

Field.displayName = 'Field';

export { Field };
