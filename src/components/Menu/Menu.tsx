import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { Box } from '../Box';
import { Popper, PopperProps } from '../Popper';

export interface MenuProps extends Omit<PopperProps, 'children'>, SxProps {}

export const Menu: React.FC<MenuProps> = (props) => {
  const {
    sx,
    children,
    trigger,
    closeOnBlur = false,
    closeOnEsc = true,
    closeOnInnerClick = true,
    closeOnOuterClick = true,
    placement = 'bottom-start',
    offset = [0, 8],
    ...rest
  } = props;

  const styles = useComponentStyles('Menu', props);

  return (
    <Popper
      trigger={trigger}
      closeOnBlur={closeOnBlur}
      closeOnEsc={closeOnEsc}
      closeOnInnerClick={closeOnInnerClick}
      closeOnOuterClick={closeOnOuterClick}
      placement={placement}
      offset={offset}
    >
      <Box sx={styles} {...rest}>
        {children}
      </Box>
    </Popper>
  );
};
