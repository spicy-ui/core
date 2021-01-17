import clsx from 'clsx';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import * as React from 'react';
import { FiChevronDown, FiLoader, FiX } from 'react-icons/fi';
import { Box, Flex, Input, Menu, MenuItem, Stack, Text } from '..';
import { SelectArrow, SelectClear, SelectLoading } from './styled';

function defaultItemToString(item: SelectItem | null) {
  return item ? item.label : '';
}

function defaultRenderMenuItemLabel(item: SelectItem | null, fallback: string | null = null) {
  if (!item && fallback) {
    return <Text color="gray.400">{fallback}</Text>;
  }

  return item ? <>{item.label}</> : null;
}

const MenuMessage: React.FC = ({ children }) => (
  <Flex py={4} align="center" justify="center">
    <Text as="span" color="gray.600">
      {children}
    </Text>
  </Flex>
);

export interface SelectItem<V = any> {
  value: V;
  label: string;
}

export interface SelectI18n {
  loading?: string;
  noOptions?: string;
}

export interface SelectProps<V = any> {
  disabled?: boolean;
  inputValue?: string;
  isClearable?: boolean;
  isInvalid?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  items: SelectItem<V>[];
  itemToString?: (item: SelectItem<V> | null) => string;
  onChange: (value: SelectItem<V> | null) => void;
  onInputChange?: (value: string) => void;
  placeholder?: string;
  renderMenuItemLabel?: (item: SelectItem<V> | null, fallback?: string | null) => React.ReactNode;
  space?: string;
  value: SelectItem<V> | null;
  variant?: string;
  i18n?: SelectI18n;
}

const defaultI18n: Required<SelectI18n> = {
  loading: 'Loading...',
  noOptions: 'No options',
};

export function Select<V = any>({
  disabled,
  inputValue,
  isClearable,
  isInvalid,
  isLoading,
  isSearchable,
  items,
  itemToString = defaultItemToString,
  onChange,
  onInputChange,
  placeholder,
  renderMenuItemLabel = defaultRenderMenuItemLabel,
  space,
  value,
  variant,
  i18n,
}: SelectProps<V>) {
  const localization = { ...defaultI18n, ...i18n };

  const onSelectedItemChange = React.useCallback(
    (changes: UseComboboxStateChange<SelectItem<V>>) => {
      if (changes.selectedItem) {
        onChange(changes.selectedItem);
      }
    },
    [onChange],
  );

  const onInputValueChange = React.useCallback(
    (changes: UseComboboxStateChange<SelectItem<V>>) => {
      if (onInputChange && changes.inputValue !== undefined && changes.inputValue !== null) {
        onInputChange(changes.inputValue);
      }
    },
    [onInputChange],
  );

  const {
    isOpen,
    selectedItem,
    getComboboxProps,
    getToggleButtonProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    setInputValue,
    highlightedIndex,
    closeMenu,
  } = useCombobox<SelectItem<V>>({
    items,
    selectedItem: value,
    onSelectedItemChange,
    itemToString,
    inputValue,
    onInputValueChange,
  });

  const onClear = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      if (isOpen) {
        closeMenu();
      }

      setInputValue('');

      onChange(null);
    },
    [closeMenu, isOpen, onChange, setInputValue],
  );

  const inputProps = getInputProps({}, { suppressRefError: true });

  return (
    <Box position="relative" {...getComboboxProps()}>
      <Input
        as="button"
        disabled={disabled}
        isInvalid={isInvalid}
        space={space}
        variant={variant}
        {...getToggleButtonProps()}
      >
        <Flex pr={2} flex="1 1 0%">
          {isSearchable ? (
            <Input
              disabled={disabled}
              placeholder={placeholder}
              readOnly={!isSearchable}
              style={{ boxShadow: 'none' }}
              variant="unstyled"
              {...inputProps}
            />
          ) : (
            renderMenuItemLabel(selectedItem, placeholder)
          )}
        </Flex>
        <Stack spacing={2} direction="row" flexShrink={0}>
          {isLoading && (
            <SelectLoading fontSize={space}>
              <FiLoader />
            </SelectLoading>
          )}
          {!isLoading && isClearable && (selectedItem || inputValue) && (
            <SelectClear fontSize={space} onClick={onClear}>
              <FiX />
            </SelectClear>
          )}
          <SelectArrow fontSize={space}>
            <FiChevronDown />
          </SelectArrow>
        </Stack>
      </Input>
      <Menu
        mt={2}
        width="full"
        maxHeight={48}
        position="absolute"
        style={{
          display: isOpen ? 'flex' : 'none',
          outline: 'none',
          overflowY: 'auto',
        }}
        zIndex="dropdown"
        {...getMenuProps()}
      >
        {isLoading && <MenuMessage>{localization.loading}</MenuMessage>}
        {!isLoading && items.length === 0 && <MenuMessage>{localization.noOptions}</MenuMessage>}
        {!isLoading &&
          items.map((item, index) => (
            <MenuItem
              // eslint-disable-next-line react/no-array-index-key
              key={`select-item-${index}`}
              {...getItemProps({
                className: clsx({ active: highlightedIndex === index }),
                index,
                item,
              })}
            >
              {renderMenuItemLabel(item)}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
}
