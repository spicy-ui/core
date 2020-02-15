import styled from 'styled-components';
import { space, width } from 'styled-system';
import { variant } from '../util';
import { InputProps } from './Input';

export const StyledInput = styled('input')<InputProps>`
  ${variant({ prop: 'space', scale: 'componentStyles.inputs.spaces' })}
  ${p => (p.fullWidth ? 'width: 100%;' : '')}
  ${width}
  ${space}
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid transparent;
  color: ${p => p.theme.colors.gray[900]};
  ${variant({ prop: 'variant', scale: 'componentStyles.inputs.variants' })}
  outline: none;
  transition: all 250ms ease 0s;
  user-select: none;

  &:focus {
    ${p => p.theme.common.focus.default(p)}
    z-index: 1;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
