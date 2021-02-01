import { SpaceProps } from '@spicy-ui/styled-system';
import * as React from 'react';
import { SxProps, useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Spinner } from '../Spinner';

interface ButtonSpinnerProps {
  hasText: boolean;
  spacing?: SpaceProps['margin'];
}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = (props) => {
  const { children = <Spinner sx={{ color: 'currentcolor', height: '1em', width: '1em' }} /> } = props;

  const styles = useComponentStyles('ButtonSpinner', props);

  return <Box sx={styles}>{children}</Box>;
};

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonVariants = 'filled' | 'outlined' | 'ghost' | 'link' | 'unstyled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, SxProps {
  children?: React.ReactNode;
  as?: string | React.ComponentType<any>;
  /** Space between the button icon and label. */
  iconSpacing?: SpaceProps['margin'];
  /** Icon shown before the button's label. */
  iconBefore?: React.ReactElement;
  /** Icon shown after the button's label. */
  iconAfter?: React.ReactElement;
  /** If `true`, the button will add the `data-active` attribute. */
  isActive?: boolean;
  /** If `true`, the button will be disabled. */
  isDisabled?: boolean;
  /** If `true`, the button will show a spinner. */
  isLoading?: boolean;
  /** If `true`, the button will take up the full width of its container. */
  isFullWidth?: boolean;
  /** The label to be shown beside the spinner when `isLoading` is `true`. */
  loadingText?: string;
  /** Button `type`. */
  type?: 'submit' | 'reset' | 'button';
  /** Replacement spinner component for when `isLoading` is set to `true` */
  spinner?: React.ReactElement;
  /** Color of the button. Supports any key in `theme.colors`. */
  color?: string;
  /** Size of the button. */
  size?: LiteralUnion<ButtonSizes>;
  /** Variant style of the button. */
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
