import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { Box } from '../Box';
import { baseStyle, size, withColorMode } from '../util';

const Fallback: React.FC = () => (
  <Box width="full" height="full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </Box>
);

const Initials: React.FC<{ name: string }> = ({ name }) => (
  <span>
    {name
      .split(' ')
      .map((part, i) => (i < 2 ? part.charAt(0) : undefined))
      .filter((part) => !!part)}
  </span>
);

const Image: React.FC<{ src?: string }> = ({ src }) => <Box as="img" src={src} maxWidth="100%" />;

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface AvatarProps extends Omit<ColorProps, 'color'> {
  /** Size of the avatar. */
  size?: AvatarSize;
  /** Name of the user. */
  name?: string;
  /* Url of avatar image. */
  src?: string;
}

const shouldForwardProp = createShouldForwardProp([...props]);

const AvatarWrapper = styled('div').withConfig<AvatarProps>({ shouldForwardProp })((p) =>
  css({
    ...withColorMode(baseStyle('components.Avatar'))(p),
    ...withColorMode(size('components.Avatar'))(p),
    ...color(p),
  }),
);

const Avatar: React.FC<AvatarProps> = ({ name, src, ...rest }) => {
  return (
    <AvatarWrapper {...rest}>
      {!name && !src && <Fallback />}
      {name && !src && <Initials name={name} />}
      {src && <Image src={src} />}
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  bg: 'gray.100',
  size: 'md',
};

Avatar.displayName = 'Avatar';

export { Avatar };
