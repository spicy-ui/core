import { get } from '@spicy-ui/styled-system';
import deepmerge from 'deepmerge';
import * as React from 'react';
import isEqual from 'react-fast-compare';
import { useTheme } from 'styled-components';
import { ComponentThemeConfig } from '../../theme/types';
import { filterUndefined, omit, runIfFn } from './util';

export function useComponentStyles(componentKey: string, props: any = {}) {
  const theme = useTheme();

  const componentConfig: ComponentThemeConfig | undefined = get(theme, `components.${componentKey}`);
  const propToScaleMap = componentConfig?.propToScaleMap ?? [];
  const defaultProps = componentConfig?.defaultProps ?? {};

  const allComponentProps = React.useMemo<any>(
    () => deepmerge.all([{ theme }, defaultProps, filterUndefined(omit(props, ['children']))]),
    [defaultProps, props, theme],
  );

  const sx = props.sx ?? {};

  const stylesRef = React.useRef({});

  return React.useMemo(() => {
    if (componentConfig) {
      const baseStyles = componentConfig.baseStyle ? runIfFn(componentConfig.baseStyle, allComponentProps) : {};

      const styles = [baseStyles];

      propToScaleMap.forEach(([prop, scale]) => {
        if (allComponentProps[prop]) {
          const cScale = componentConfig[scale];
          const cProp = allComponentProps[prop];
          const style = runIfFn(cScale?.[cProp as keyof typeof cScale], allComponentProps);

          if (style) {
            styles.push(style);
          }
        }
      });

      if (sx) {
        styles.push(sx);
      }

      const mergedStyles = deepmerge.all(styles as any[]);

      const isStyleEqual = isEqual(stylesRef.current, mergedStyles);

      if (!isStyleEqual) {
        stylesRef.current = mergedStyles;
      }
    }

    return stylesRef.current;
  }, [allComponentProps, componentConfig, propToScaleMap, sx]);
}
