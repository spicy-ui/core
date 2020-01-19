import { css as systemCss } from '@styled-system/css';
import { css as styledCss } from 'styled-components';

export const applyButtonVariations = (variants: any) => (props: any) => {
  const themeVariant = props.theme.componentStyles.buttons;
  const localVariant = variants[props.variant];
  const customVariant = themeVariant.variants[props.variant];
  const colors = themeVariant.colors[props.color];

  if (customVariant) {
    return styledCss`
      ${systemCss(localVariant(colors, props))(props)}
      ${systemCss(customVariant(colors, props))(props)}
    `;
  }

  return styledCss`
    ${systemCss(localVariant(colors, props))(props)}
  `;
};
