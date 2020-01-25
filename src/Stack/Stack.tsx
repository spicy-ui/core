import * as React from 'react';
import { SpaceProps } from 'styled-system';
import { Box } from '../Box';
import { Flex, FlexProps } from '../Flex';

export interface StackProps extends FlexProps {
  /** If `true` the items will be reversed.  */
  isReversed?: boolean;
  /** Orientation of the stack. */
  orientation?: 'horizontal' | 'vertical';
  /** Spacing between each item. Accepts styled-system spacing prop values. */
  spacing?: SpaceProps['m'];
}

const Stack: React.FC<StackProps> = ({ children, direction, isReversed, orientation, spacing, ...rest }) => {
  const _isReversed = isReversed || (direction && (direction as string).endsWith('reverse'));

  let _direction = (direction as string) || 'column';

  if (!direction && orientation === 'horizontal') {
    _direction = `row`;
  }

  if (!direction && _isReversed) {
    _direction += '-reverse';
  }

  const isInline = (_direction as string).startsWith('row');

  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Flex direction={_direction as FlexProps['direction']} {...rest}>
      {validChildrenArray.map((child, idx) => {
        const isLastChild = validChildrenArray.length === idx + 1;
        const spacingProps = isInline
          ? { [_isReversed ? 'ml' : 'mr']: isLastChild ? undefined : spacing }
          : { [_isReversed ? 'mt' : 'mb']: isLastChild ? undefined : spacing };

        return (
          <Box key={`stack-box-${idx}`} display="inline-block" {...spacingProps}>
            {child}
          </Box>
        );
      })}
    </Flex>
  );
};

Stack.defaultProps = {
  isReversed: false,
  orientation: 'vertical',
};

Stack.displayName = 'Stack';

export default Stack;
