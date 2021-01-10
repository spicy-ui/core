import clsx from 'clsx';
import { useCombobox } from 'downshift';
import * as React from 'react';
import { uid } from 'react-uid';
import { Box, Flex, Input, Menu, MenuItem, Text } from '../..';
import { SelectActions } from '../components/SelectActions';
import { BaseSelectProps } from '../types';
import { defaultItemToString, renderMenuItemLabel } from '../util';

export interface SingleSearchableProps extends BaseSelectProps {}

export const SingleSearchable: React.FC<SingleSearchableProps> = ({
  disabled,
  getMenuItemLabel = renderMenuItemLabel,
  inputValue,
  isClearable,
  isInvalid,
  isLoading,
  itemToString = defaultItemToString,
  onChange,
  onInputChange,
  options,
  placeholder,
  space,
  value,
  variant,
}) => {
  const {
    isOpen,
    selectedItem,
    getComboboxProps,
    getToggleButtonProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    openMenu,
    closeMenu,
  } = useCombobox({
    inputValue,
    items: options,
    itemToString,
    onInputValueChange: (change) => {
      if (change.inputValue !== undefined && change.inputValue !== null) {
        onInputChange(change.inputValue);
      }
    },
    onSelectedItemChange: (change) => {
      if (onChange && change.selectedItem) {
        onChange(change.selectedItem);
      }
    },
    selectedItem: value,
  });

  const onClear = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      closeMenu();
      onInputChange('');

      if (onChange) {
        onChange(null);
      }
    },
    [closeMenu, onChange, onInputChange],
  );

  return (
    <Box position="relative" {...getComboboxProps()}>
      <Input as="button" isInvalid={isInvalid} space={space} variant={variant} {...getToggleButtonProps({ disabled })}>
        <Flex pr={2} flex="1 1 0%">
          <Input
            variant="unstyled"
            onFocus={() => (!isOpen && !disabled ? openMenu() : undefined)}
            style={{ boxShadow: 'none' }}
            {...getInputProps({ onClick: (e) => e.stopPropagation(), placeholder, disabled })}
          />
        </Flex>
        <SelectActions
          isClearable={isClearable && (selectedItem || inputValue)}
          isLoading={isLoading}
          onClear={onClear}
          size={space}
        />
      </Input>
      <Menu
        mt={2}
        position="absolute"
        width="100%"
        zIndex="dropdown"
        {...getMenuProps({ style: { display: isOpen ? 'flex' : 'none', outline: 'none' } })}
      >
        {isLoading && (
          <Flex py={4} align="center" justify="center">
            <Text as="span" color="gray.600">
              Loading...
            </Text>
          </Flex>
        )}
        {!isLoading && options.length === 0 && (
          <Flex py={4} align="center" justify="center">
            <Text as="span" color="gray.600">
              No options
            </Text>
          </Flex>
        )}
        {!isLoading &&
          options.map((item, index) => (
            <MenuItem
              key={uid(item, index)}
              {...getItemProps({
                item,
                index,
                className: clsx({ active: highlightedIndex === index }),
              })}
            >
              {getMenuItemLabel(item)}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

SingleSearchable.defaultProps = {
  isInvalid: false,
  space: 'md',
  variant: 'outlined',
};
