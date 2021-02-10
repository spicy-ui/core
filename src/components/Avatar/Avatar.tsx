import * as React from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import { useImage } from '../../hooks';
import { SxProps, useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Text } from '../Text';

interface AvatarImageProps {
  getInitials: (name: string) => string;
  icon: React.ReactElement;
  name?: string;
  src?: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ getInitials, icon, name, src }) => {
  const { status } = useImage(src);

  if (!src || status !== 'loaded') {
    return name ? (
      <Text as="span" fontSize="inherit" fontFamily="inherit" lineHeight="inherit">
        {getInitials(name)}
      </Text>
    ) : (
      <>{icon}</>
    );
  }

  return <Box as="img" src={src} alt={name} size="full" objectFit="cover" />;
};

const defaultGetInitials = (name: string) => {
  const [first, last] = name.split(' ');
  return first && last ? `${first.charAt(0)}${last.charAt(0)}` : first.charAt(0);
};

export type AvatarSizes = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type AvatarVariants = 'circle' | 'rounded' | 'square';

export interface AvatarProps extends SxProps {
  children?: React.ReactNode;
  /** Function to overwrite getting avatar initials. */
  getInitials?: (name: string) => string;
  /** The avatars fallback icon when the src is not loaded or specified. */
  icon?: React.ReactElement;
  /** Name of the person the avatar represents. */
  name?: string;
  /** If `true` the Avatar will show a border around it. */
  showBorder?: boolean;
  /** Image url of the Avatar. */
  src?: string;
  /** Size of the avatar. */
  size?: LiteralUnion<AvatarSizes>;
  /** Variant of the avatar. */
  variant?: LiteralUnion<AvatarVariants>;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    children,
    sx,
    getInitials = defaultGetInitials,
    icon = <HiOutlineUser size="75%" />,
    name,
    showBorder,
    size,
    src,
    variant,
    ...rest
  } = props;

  const styles = useComponentStyles('Avatar', props);

  return (
    <Box ref={ref} sx={styles} {...rest}>
      <AvatarImage getInitials={getInitials} icon={icon} name={name} src={src} />
      {children}
    </Box>
  );
});

Avatar.defaultProps = {
  size: 'md',
  variant: 'circle',
};

Avatar.displayName = 'Avatar';
