const spaces = {
  sm: {
    borderRadius: 'sm',
    fontSize: 'sm',
    fontWeight: 'normal',
    lineHeight: 1.2,
    px: 8,
    height: 32,
  },
  base: {
    borderRadius: 'sm',
    fontSize: 'base',
    fontWeight: 'normal',
    lineHeight: 1.2,
    px: 12,
    height: 40,
  },
  lg: {
    borderRadius: 'sm',
    fontSize: 'lg',
    fontWeight: 'normal',
    lineHeight: 1.2,
    px: 16,
    height: 48,
  },
};

const variants = {
  outline: {
    backgroundColor: 'white',
    borderColor: 'gray.100',
  },
  filled: {
    backgroundColor: 'gray.50',
  },
  unstyled: {},
};

export const inputs = {
  spaces,
  variants,
};
