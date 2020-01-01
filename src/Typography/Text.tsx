import * as React from 'react';
import { ThemeContext } from 'styled-components';
import { TypeScale } from '../Theme';
import Typography, { TypographyProps } from './Typography';
import { getTypeScale } from './util';

export interface TextProps extends TypographyProps {
  /** Font size and line height as a token. */
  scale?: TypeScale;
}

const Text: React.FC<TextProps> = ({ scale, ...rest }) => {
  const typeScale = React.useContext(ThemeContext).typeScale;

  return <Typography {...getTypeScale(scale, typeScale)} {...rest} />;
};

export default Text;
