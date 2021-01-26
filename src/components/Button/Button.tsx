import * as React from 'react';
import { MarginProps } from 'styled-system';
import { useComponentStyles } from '../../hooks';
import { SxProp } from '../../system';
import { LiteralUnion } from '../types';
import { Box } from '../Box';
import { Spinner } from '../Spinner';

interface ButtonSpinnerProps {
  hasText: boolean;
  spacing?: MarginProps['margin'];
}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = (props) => {
  const { children = <Spinner sx={{ color: 'currentcolor', height: '1em', width: '1em' }} /> } = props;

  const styles = useComponentStyles('ButtonSpinner', props);

  return <Box sx={styles}>{children}</Box>;
};

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonVariants = 'filled' | 'outlined' | 'ghost' | 'link' | 'unstyled';

export interface ButtonProps extends SxProp {
  children?: React.ReactNode;
  as?: string | React.ComponentType<any>;
  iconSpacing?: MarginProps['margin'];
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isFullWidth?: boolean;
  loadingText?: string;
  autoFocus?: boolean;
  type?: 'submit' | 'reset' | 'button';
  spinner?: React.ReactElement;
  color?: string;
  size?: LiteralUnion<ButtonSizes>;
  variant?: LiteralUnion<ButtonVariants>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    sx,
    as,
    iconSpacing,
    iconBefore,
    iconAfter,
    isActive,
    isDisabled,
    isLoading,
    loadingText,
    spinner,
    type,
    color,
    size,
    variant,
    ...rest
  } = props;

  const styles = useComponentStyles('Button', props);

  return (
    <Box
      ref={ref}
      as={as ?? 'button'}
      disabled={isLoading || isDisabled}
      type={as ? undefined : type}
      role="button"
      data-active={isActive}
      data-loading={isLoading}
      sx={styles}
      {...rest}
    >
      {iconBefore && !isLoading && (
        <Box as="span" marginRight={iconSpacing}>
          {iconBefore}
        </Box>
      )}
      {isLoading && (
        <ButtonSpinner hasText={!!loadingText} spacing={iconSpacing}>
          {spinner}
        </ButtonSpinner>
      )}
      {isLoading
        ? loadingText || (
            <Box as="span" opacity="0">
              {children}
            </Box>
          )
        : children}
      {iconAfter && !isLoading && (
        <Box as="span" marginLeft={iconSpacing}>
          {iconAfter}
        </Box>
      )}
    </Box>
  );
});

Button.defaultProps = {
  iconSpacing: '0.5rem',
  type: 'button',
  color: 'gray',
  size: 'md',
  variant: 'filled',
};

Button.displayName = 'Button';
