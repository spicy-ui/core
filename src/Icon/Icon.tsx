import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Box, BoxProps } from '../Box';
import { useTheme } from '../Theme';
import { variant } from '../util';

const Svg = styled(Box)`
  ${variant({ scale: 'componentStyles.icon' })}
`;

export interface IconProps extends BoxProps {
  /** Name of the icon. */
  name: keyof DefaultTheme['icons'];
  /** Style variant of the icon. */
  variant?: keyof DefaultTheme['componentStyles']['icon'];
}

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const { icons } = useTheme();

  const { path } = React.useMemo(() => {
    if (!icons[name]) {
      console.error(`[Icon] Unknown icon '${name}'`);

      // Default to help-circle if unknown icon.
      return icons['help-circle'];
    }

    return icons[name];
  }, [icons, name]);

  return (
    <Svg as="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" {...rest}>
      {path}
    </Svg>
  );
};

Icon.displayName = 'Icon';

Icon.defaultProps = {
  name: 'help-circle',
  size: '24px',
  variant: 'default',
};

export default Icon;
