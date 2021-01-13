import clsx from 'clsx';
import { useSelect } from 'downshift';
import * as React from 'react';
import { uid } from 'react-uid';
import { Box, Flex, Input, Menu, MenuItem } from '../..';
import { SelectActions } from '../components/SelectActions';
import { BaseSelectProps } from '../types';
import { renderMenuItemLabel } from '../util';

export interface SingleProps extends BaseSelectProps {}

export const Single: React.FC<SingleProps> = ({
  disabled,
  getMenuItemLabel = renderMenuItemLabel,
  isClearable,
  isInvalid,
  onChange,
  options,
  placeholder,
  space,
  value,
  variant,
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    closeMenu,
  } = useSelect({
    items: options,
    onSelectedItemChange: onChange ? (changes) => onChange(changes.selectedItem) : undefined,
    selectedItem: value,
  });

  const onClear = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      closeMenu();

      if (onChange) {
        onChange(null);
      }
    },
    [closeMenu, onChange],
  );

  return (
    <Box position="relative">
      <Input
        as="button"
        isInvalid={isInvalid}
        space={space}
        variant={variant}
        {...getToggleButtonProps({ style: { userSelect: 'none' }, disabled })}
      >
        <Flex pr={2} flex="1 1 0%">
          {getMenuItemLabel(selectedItem, placeholder)}
        </Flex>
        <SelectActions isClearable={isClearable && selectedItem} onClear={onClear} size={space} />
      </Input>
      <Menu
        mt={2}
        position="absolute"
        width="100%"
        zIndex="dropdown"
        {...getMenuProps({
          style: {
            display: isOpen ? 'flex' : 'none',
            outline: 'none',
          },
        })}
      >
        {options.map((item, index) => (
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

Single.defaultProps = {
  isInvalid: false,
  space: 'md',
  variant: 'outlined',
};
