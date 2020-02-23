import styled from 'styled-components';
import { StyledInput } from '../Input/styled';

export const FieldLabel = styled('label')`
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const FieldRequired = styled('span')`
  margin-left: ${p => p.theme.space.xs}px;
  color: ${p => p.theme.colors.red[600]};
`;

interface FieldControlProps {
  colorMode: 'light' | 'dark';
  isInvalid?: boolean;
}

export const FieldControl = styled('div')<FieldControlProps>`
  ${StyledInput} {
    ${p =>
      p.isInvalid
        ? `
      box-shadow: ${p.theme.shadows.error(p.colorMode === 'dark')};
      z-index: 1;`
        : ''}
  }
`;

export const FieldHelperText = styled('div')`
  font-size: ${p => p.theme.fontSizes.sm}px;
  line-height: ${p => p.theme.lineHeights.body};
`;

export const FieldErrorText = styled('div')`
  color: ${p => p.theme.colors.red[600]};
  font-size: ${p => p.theme.fontSizes.sm}px;
  line-height: ${p => p.theme.lineHeights.body};
`;
