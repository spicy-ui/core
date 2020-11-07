import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import { height, HeightProps, space, SpaceProps, width, WidthProps } from 'styled-system';
import { baseStyle, size, transition, transitionProps, TransitionProps, variant } from '../../helpers';

export interface TextAreaProps
  extends SpaceProps,
    WidthProps,
    HeightProps,
    TransitionProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Indicate whether the text area has a valid value or not. */
  isInvalid?: boolean;
  /** Size of the text area. */
  space?: string;
  /** Variant style of the text area. */
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, ...transitionProps, 'isInvalid', 'space', 'variant']);

export const TextArea = styled('textarea').withConfig<TextAreaProps>({ shouldForwardProp })`
  ${baseStyle('components.TextArea')}
  ${size('components.TextArea', 'space')}
  ${variant('components.TextArea')}
  ${width}
  ${height}
  ${space}
  ${transition}
`;

TextArea.defaultProps = {
  isInvalid: false,
  rows: 1,
  space: 'md',
  variant: 'outlined',
};
