import { ExtendedFlexboxProps, SpaceProps } from '@spicy-ui/styled-system';
import * as React from 'react';
import { SxProp } from '../../system';
import { AsProp, ChildrenProp, HTMLAttributes } from '../../types';
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

export interface StackProps extends HTMLAttributes, ExtendedFlexboxProps, AsProp, ChildrenProp, SxProp {
  /** Spacing between each stack element. */
  spacing?: SpaceProps['margin'];
  /** Set a custom divider element. */
  divider?: React.ReactElement;
  /** Set to `true` if each child of the stack should be wrapped in a `Box` component. */
  shouldWrapChildren?: boolean;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    children,
    sx,
    flexDir,
    flexDirection,
    direction = 'column',
    align,
    justify,
    wrap,
    spacing,
    shouldWrapChildren,
    divider: dividerComponent,
    ...rest
  } = props;

  const _direction = flexDir || flexDirection || direction;

  const stackStyle = React.useMemo(() => {
    const directions = {
      row: { marginLeft: spacing, marginTop: 0 },
      column: { marginTop: spacing, marginLeft: 0 },
      'row-reverse': { marginRight: spacing, marginBottom: 0 },
      'column-reverse': { marginBottom: spacing, marginRight: 0 },
    };

    return {
      '& > * ~ *': responsive(_direction, (v: keyof typeof directions) => directions[v]),
    };
  }, [_direction, spacing]);

  const dividerStyle = React.useMemo(() => {
    const dividers = {
      row: { my: 0, mx: spacing },
      column: { my: spacing, mx: 0 },
      'row-reverse': { my: 0, mx: spacing },
      'column-reverse': { my: spacing, mx: 0 },
    };

    return {
      '&': responsive(_direction, (v: keyof typeof dividers) => dividers[v]),
    };
  }, [_direction, spacing]);

  const validChildren = React.Children.toArray(children).filter((child) => React.isValidElement(child));

  const styles = React.useMemo(
    () => (!dividerComponent ? { ...stackStyle, ...sx } : sx),
    [dividerComponent, stackStyle, sx],
  );

  return (
    <Box
      ref={ref}
      display="flex"
      alignItems={align}
      justifyContent={justify}
      flexDirection={_direction}
      flexWrap={wrap}
      sx={styles}
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

Stack.displayName = 'Stack';
