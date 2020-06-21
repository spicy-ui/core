import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { useButtonStyle } from './styled';
import { ButtonProps } from './types';

const shouldForwardProp = createShouldForwardProp([...props, 'color', 'fullWidth', 'size', 'variant']);

const Button = styled('button').withConfig<ButtonProps>({ shouldForwardProp })(useButtonStyle);

Button.defaultProps = {
  color: 'gray',
  fullWidth: false,
  size: 'md',
  type: 'button',
  variant: 'filled',
};

Button.displayName = 'Button';

export { Button };
