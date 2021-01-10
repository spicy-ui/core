import * as React from 'react';
import { Single, SingleSearchable } from './Single';
import { BaseSelectProps } from './types';

export interface SelectProps extends BaseSelectProps {
  isMulti?: boolean;
  isSearchable?: boolean;
}

export const Select: React.FC<SelectProps> = ({ isMulti, isSearchable, ...props }) => {
  if (isMulti && isSearchable) {
    return <div>multi search</div>;
  }

  if (isMulti) {
    return <div>multi</div>;
  }

  if (isSearchable) {
    return <SingleSearchable {...props} />;
  }

  return <Single {...props} />;
};
