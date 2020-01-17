export const getTextColor = (key: string, reverse = false) => {
  if (key === 'base' || key === 'inverse') {
    return reverse ? (key === 'base' ? 'text.inverse' : 'text.base') : `text.${key}`;
  }

  return key;
};

export const applyVariants = (variants: any) => (props: any) => {
  const colors = props.theme.buttons.colors[props.color];

  // We can also extend this to add additional variants from the user's theme if we'd like too.
  return `
    ${variants[props.variant](colors, props)}
  `;
};
