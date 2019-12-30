import styled from 'styled-components';

export interface ButtonProps {
  variant?: 'default' | 'outlined';
}

const Button = styled.button<ButtonProps>``;

Button.defaultProps = {
  type: 'button',
};

Button.displayName = 'Button';

export default Button;
