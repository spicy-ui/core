import styled from 'styled-components';
import { Box, BoxProps } from '../Box';
import { variant } from '../util';

const variants = {
  horizontal: {
    width: 'auto',
    my: 'sm',
    border: 0,
    borderColor: 'inherit',
    borderBottom: '1px solid',
    color: 'gray.300',
    opacity: 0.6,
  },
  vertical: {
    height: 'auto',
    mx: 'sm',
    border: 0,
    borderColor: 'inherit',
    borderLeft: '1px solid',
    color: 'gray.300',
    opacity: 0.6,
  },
};

export interface DividerProps extends BoxProps {
  /** Orientation of the divider. */
  orientation?: 'horizontal' | 'vertical';
}

const Divider = styled(Box)<DividerProps>`
  ${variant({ prop: 'orientation', variants })}
`;

Divider.defaultProps = {
  as: 'hr',
  orientation: 'horizontal',
};

Divider.displayName = 'Divider';

export default Divider;
