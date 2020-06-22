import * as React from 'react';
import { Box } from '../Box';
import { Flex, FlexProps } from '../Flex';
import { StackProps } from './types';

const Stack: React.FC<StackProps> = ({
  children,
  direction: directionProp,
  isReversed: isReversedProp,
  orientation,
  spacing,
  ...rest
}) => {
  const isReversed = isReversedProp || (directionProp && (directionProp as string).endsWith('reverse'));

  let direction = (directionProp as string) || 'column';

  if (!directionProp && orientation === 'horizontal') {
    direction = `row`;
  }

  if (!directionProp && isReversed) {
    direction += '-reverse';
  }

  const isInline = (direction as string).startsWith('row');

  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Flex direction={direction as FlexProps['direction']} {...rest}>
      {validChildrenArray.map((child, idx) => {
        const isLastChild = validChildrenArray.length === idx + 1;
        const spacingProps = isInline
          ? { [isReversed ? 'ml' : 'mr']: isLastChild ? undefined : spacing }
          : { [isReversed ? 'mt' : 'mb']: isLastChild ? undefined : spacing };

        return (
          // eslint-disable-next-line react/no-array-index-key
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

export { Stack };
