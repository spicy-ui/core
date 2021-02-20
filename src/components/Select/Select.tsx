import { useCombobox, UseComboboxStateChange } from 'downshift';
import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import { HiChevronDown, HiX } from 'react-icons/hi';
import styled from 'styled-components';
import { usePopper } from '../../hooks';
import { sxMixin, SxProp, useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { mergeRefs } from '../../util';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Input } from '../Input';
import { MenuItem } from '../Menu';
import { Spinner } from '../Spinner';
import { Stack } from '../Stack';
import { Text } from '../Text';

function defaultItemToString(item: SelectItem | null) {
  return item ? item.label : '';
}

function defaultRenderItem(item: SelectItem | null, fallback: string | null = null) {
  if (!item && fallback) {
    return <Text color="gray.400">{fallback}</Text>;
  }

  return item ? <>{item.label}</> : null;
}

const SelectText: React.FC<{ label: React.ReactNode } & SxProp> = ({ label, sx }) => (
  <Flex py={4} align="center" justify="center">
    <Text as="span" sx={sx}>
      {label}
    </Text>
  </Flex>
);

const SelectIcon: React.FC<
  {
    icon: React.ReactElement;
    onClick?: (e: React.MouseEvent) => void;
  } & SxProp
> = ({ icon, sx, ...rest }) => (
  <Text as="span" sx={sx} {...rest}>
    {icon}
  </Text>
);

const defaultI18n: Required<SelectI18n> = {
  loading: 'Loading...',
  noItems: 'No items',
};

const Motion = styled(motion.div)(sxMixin);

const variants: Variants = {
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: { duration: 0.2 },
  },
};

export interface SelectItem<V = any> {
  value: V;
  label: string;
}

export interface SelectI18n {
  loading?: string;
  noItems?: string;
}

export type SelectSizes = 'xs' | 'sm' | 'md' | 'lg';

export type SelectVariants = 'outlined' | 'filled' | 'underlined' | 'unstyled';

export interface SelectProps {
  searchValue?: string;
  onSearchChange?: (search: string) => void;
  items: SelectItem[];
  itemToString?: (item: SelectItem | null) => string;
  renderItem?: (item: SelectItem | null, fallback?: string | null) => React.ReactNode;
  value: SelectItem | null;
  onChange: (value: SelectItem | null) => void;
  isClearable?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  placeholder?: string;
  size?: LiteralUnion<SelectSizes>;
  variant?: LiteralUnion<SelectVariants>;
  i18n?: SelectI18n;
}

export const Select: React.FC<SelectProps> = ({
  searchValue,
  onSearchChange,
  items,
  itemToString = defaultItemToString,
  renderItem = defaultRenderItem,
  value,
  onChange,
  isClearable,
  isDisabled,
  isInvalid,
  isLoading,
  isSearchable,
  placeholder,
  size,
  variant,
  i18n,
}) => {
  const localization = { ...defaultI18n, ...i18n };

  const onSelectedItemChange = React.useCallback(
    (changes: UseComboboxStateChange<SelectItem>) => {
      if (changes.selectedItem) {
        onChange(changes.selectedItem);
      }
    },
    [onChange],
  );

  const onSearchValueChange = React.useCallback(
    (changes: UseComboboxStateChange<SelectItem>) => {
      if (onSearchChange && changes.inputValue !== undefined && changes.inputValue !== null) {
        onSearchChange(changes.inputValue);
      }
    },
    [onSearchChange],
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
  } = useCombobox({
    items,
    selectedItem: value,
    onSelectedItemChange,
    itemToString,
    inputValue: searchValue,
    onInputValueChange: onSearchValueChange,
  });

  const { triggerProps, childProps } = usePopper({
    isOpen,
    offset: [0, 8],
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

  const comboboxProps = getComboboxProps();
  const toggleButtonProps = getToggleButtonProps();
  const inputProps = getInputProps({}, { suppressRefError: true });
  const menuProps = getMenuProps({}, { suppressRefError: true });

  const menuStyles = useComponentStyles('Menu', { isFullWidth: true, size, variant });
  const textStyles = useComponentStyles('SelectText', { size, variant });
  const iconStyles = useComponentStyles('SelectIcon', { size, variant });

  return (
    <Box pos="relative" {...comboboxProps}>
      <Input
        as="button"
        type="button"
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        variant={variant}
        {...triggerProps}
        {...toggleButtonProps}
        ref={mergeRefs([triggerProps.ref, toggleButtonProps.ref])}
      >
        <Flex pr={2} flex="1 1 0%">
          {isSearchable ? (
            <Input
              isDisabled={isDisabled}
              placeholder={placeholder}
              variant="unstyled"
              sx={{ boxShadow: 'none !important' }}
              {...inputProps}
            />
          ) : (
            renderItem(selectedItem, placeholder)
          )}
        </Flex>
        <Stack spacing={2} direction="row" align="center" flexShrink={0}>
          {isLoading && <Spinner color="gray.400" size={size} />}
          {!isLoading && isClearable && (selectedItem || searchValue) && (
            <SelectIcon icon={<HiX />} onClick={onClear} sx={iconStyles} />
          )}
          <SelectIcon icon={<HiChevronDown />} sx={iconStyles} />
        </Stack>
      </Input>
      <Motion
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={variants}
        sx={menuStyles}
        {...childProps}
        {...menuProps}
        ref={mergeRefs([childProps.ref, menuProps.ref])}
      >
        {isLoading && <SelectText label={localization.loading} sx={textStyles} />}
        {!isLoading && items.length === 0 && <SelectText label={localization.noItems} sx={textStyles} />}
        {!isLoading &&
          items.map((item, index) => (
            <MenuItem
              // eslint-disable-next-line react/no-array-index-key
              key={`select-item-${index}`}
              {...getItemProps({
                'data-active': highlightedIndex === index ? true : undefined,
                index,
                item,
              } as any)}
            >
              {renderItem(item)}
            </MenuItem>
          ))}
      </Motion>
    </Box>
  );
};

Select.defaultProps = {
  size: 'md',
  variant: 'outlined',
};

Select.displayName = 'Select';
