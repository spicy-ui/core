import { InputProps } from '../Input';

export interface SelectOption {
  value: any;
  label?: string;
}

export interface BaseSelectProps {
  disabled?: boolean;
  getMenuItemLabel?: (item: SelectOption | null, fallback?: string | null) => React.ReactNode;
  inputValue: string;
  isClearable?: boolean;
  isInvalid?: boolean;
  isLoading?: boolean;
  itemToString?: (item: any) => string;
  onChange?: (newValue: any | null) => void;
  onInputChange: (change: string) => void;
  options: SelectOption[];
  placeholder?: string;
  space?: InputProps['space'];
  value?: any;
  variant?: InputProps['variant'];
}
