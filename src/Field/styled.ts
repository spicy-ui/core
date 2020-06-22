import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import styled from 'styled-components';

export const FieldLabel = styled('label')`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.body};
`;

export const FieldRequired = styled('span')`
  margin-left: ${(p) => p.theme.space.xs}px;
  color: ${(p) => p.theme.colors.red[600]};
`;

export const FieldControl = styled('div')``;

const shouldForwardProp = createShouldForwardProp(['isError']);

export interface FieldHelperTextProps {
  isError?: boolean;
}

export const FieldHelperText = styled('div').withConfig<FieldHelperTextProps>({ shouldForwardProp })`
  color: ${(p) => (p.isError ? p.theme.colors.red[600] : 'inherit')};
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  line-height: ${(p) => p.theme.lineHeights.body};
`;
