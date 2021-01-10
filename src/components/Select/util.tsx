import * as React from 'react';
import { Text } from '../Text';
import { SelectOption } from './types';

export const defaultItemToString: (item: any) => string = (item) => (item ? item.label ?? item.value.toString() : null);

export const renderMenuItemLabel = (item: SelectOption | null, fallback: string | null = null) => {
  if (!item && fallback) {
    return <Text color="gray.400">{fallback}</Text>;
  }

  return item ? <>{item.label ?? item.value.toString()}</> : null;
};
