import styled from 'styled-components';
import { useButtonStyle } from './styled';
import { ButtonProps } from './types';

const Button = styled('button')<ButtonProps>(useButtonStyle);

Button.defaultProps = {
  color: 'gray',
  fullWidth: false,
  size: 'md',
  type: 'button',
  variant: 'filled',
};

Button.displayName = 'Button';

export { Button };
