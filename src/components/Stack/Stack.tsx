import * as React from 'react';
import { MarginProps } from 'styled-system';
import { FlexUtilProps, SxProp } from '../../system';
import { Box } from '../Box';

function responsive(prop: any, mapper: (val: any) => any) {
  if (Array.isArray(prop)) {
    return prop.map((item) => {
      if (item === null) {
        return null;
      }
      return mapper(item);
    });
  }

  const type = typeof prop;

  // isObject check
  if ((type === 'function' || type === 'object') && !!prop) {
    const result: { [key: string]: any } = {};

    Object.keys(prop).forEach((key) => {
      result[key] = mapper(prop[key]);
    });

    return result;
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}

export interface StackProps extends SxProp, FlexUtilProps {
  /** Stack children. */
  children?: React.ReactNode;
  /** Spacing between each stack element. */
  spacing?: MarginProps['margin'];
  /** Set a custom divider element. */
  divider?: React.ReactElement;
  /** Set to `true` if each child of the stack should be wrapped in a `Box` component. */
  shouldWrapChildren?: boolean;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    children,
    sx: sxProp,
    direction = 'row',
    align,
    justify,
    wrap,
    spacing,
    shouldWrapChildren,
    divider: dividerComponent,
    ...rest
  } = props;

  const stackStyle = React.useMemo(() => {
    const directions = {
      row: { marginLeft: spacing, marginTop: 0 },
      column: { marginTop: spacing, marginLeft: 0 },
      'row-reverse': { marginRight: spacing, marginBottom: 0 },
      'column-reverse': { marginBottom: spacing, marginRight: 0 },
    };

    return {
      '& > * ~ *': responsive(direction, (v: keyof typeof directions) => directions[v]),
    };
  }, [direction, spacing]);

  const dividerStyle = React.useMemo(() => {
    const dividers = {
      row: { my: 0, mx: spacing },
      column: { my: spacing, mx: 0 },
      'row-reverse': { my: 0, mx: spacing },
      'column-reverse': { my: spacing, mx: 0 },
    };

    return {
      '&': responsive(direction, (v: keyof typeof dividers) => dividers[v]),
    };
  }, [direction, spacing]);

  const validChildren = React.Children.toArray(children).filter((child) => React.isValidElement(child));

  const sx = React.useMemo(() => (!dividerComponent ? { ...stackStyle, ...sxProp } : sxProp), [
    dividerComponent,
    stackStyle,
    sxProp,
  ]);

  return (
    <Box
      ref={ref}
      display="flex"
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction}
      flexWrap={wrap}
      sx={sx}
      {...rest}
    >
      {!shouldWrapChildren && !dividerComponent
        ? validChildren
        : validChildren.map((element, index) => {
            const child = shouldWrapChildren ? (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={`stack-child-${index}`}>{element}</Box>
            ) : (
              element
            );

            if (!dividerComponent) {
              return child;
            }

            const divider =
              index + 1 !== validChildren.length ? React.cloneElement(dividerComponent, { sx: dividerStyle }) : null;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={`stack-fragment-${index}`}>
                {child}
                {divider}
              </React.Fragment>
            );
          })}
    </Box>
  );
});

Stack.defaultProps = {};

Stack.displayName = 'Stack';
