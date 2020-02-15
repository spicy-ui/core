import styled from 'styled-components';
import { StyledInput } from '../Input/styled';

export const FieldLabel = styled('label')`
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const FieldRequired = styled.span`
  margin-left: ${p => p.theme.space.xs}px;
  color: ${p => p.theme.colors.red[600]};
`;

export const FieldControl = styled('div')<{ isInvalid?: boolean }>`
  ${StyledInput} {
    ${p =>
      p.isInvalid
        ? `
    ${p.theme.common.focus.error(p)}
    z-index: 1;`
        : ``}
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
