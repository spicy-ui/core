import { ComponentTheme } from '../types';

const FieldLabel: ComponentTheme = {
  baseStyle: {
    fontWeight: 'medium',
    lineHeight: 'normal',
  },
};

const FieldRequired: ComponentTheme = {
  baseStyle: {
    ml: 1,
    color: 'red.600',
  },
};

const FieldControl: ComponentTheme = {
  baseStyle: {},
};

const FieldHelperText: ComponentTheme = {
  baseStyle: (props: any) => ({
    mt: 1,
    color: props.isInvalid ? 'red.600' : 'inherit',
    fontSize: 'sm',
  }),
};

export const Field = {
  FieldLabel,
  FieldRequired,
  FieldControl,
  FieldHelperText,
};
