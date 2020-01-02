import { space } from '../';

test('returns style objects', () => {
  const styles = space({ m: '4px' });

  expect(styles).toEqual({ margin: '4px' });
});

test('returns 0 values', () => {
  const styles = space({ m: 0 });

  expect(styles).toEqual({ margin: 0 });
});

test('multiples values by the default base key', () => {
  const styles = space({ m: 3 });

  expect(styles).toEqual({ margin: 24 });
});

test('multiples negative values by the default base key', () => {
  const styles = space({ m: -2 });

  expect(styles).toEqual({ margin: -16 });
});

test('returns % values', () => {
  const styles = space({ m: '50%' });

  expect(styles).toEqual({ margin: '50%' });
});

test('returns negative em values', () => {
  const styles = space({ m: '-16em' });

  expect(styles).toEqual({ margin: '-16em' });
});

test('returns responsive values', () => {
  const styles = space({ m: [0, 2, 3] });

  expect(styles).toEqual({
    margin: 0,
    '@media screen and (min-width: 40em)': { margin: 16 },
    '@media screen and (min-width: 52em)': { margin: 24 },
  });
});

test('returns aliased values', () => {
  const styles = space({ px: 2 });

  expect(styles).toEqual({ paddingLeft: 16, paddingRight: 16 });
});

test('returns values from theme object', () => {
  const styles = space({
    theme: { space: { sm: 1 } },
    margin: 'sm',
  });

  expect(styles).toEqual({ margin: 1 });
});

test('returns string values from theme object', () => {
  const styles = space({
    theme: { space: { sm: '48em' } },
    margin: 'sm',
  });

  expect(styles).toEqual({ margin: '48em' });
});

test('pl prop sets paddingLeft', () => {
  const styles = space({ pl: 2 });

  expect(styles).toEqual({ paddingLeft: 16 });
});

test('pl prop sets paddingLeft 0', () => {
  const styles = space({ pl: 0 });

  expect(styles).toEqual({ paddingLeft: 0 });
});

test('px prop overrides pl prop', () => {
  const styles = space({ pl: 1, px: 2 });

  expect(styles).toEqual({ paddingLeft: 16, paddingRight: 16 });
});

test('py prop overrides pb prop', () => {
  const styles = space({ pb: 1, py: 2 });

  expect(styles).toEqual({ paddingTop: 16, paddingBottom: 16 });
});

test('mx prop overrides mr prop', () => {
  const styles = space({ mr: 1, mx: 2 });

  expect(styles).toEqual({ marginLeft: 16, marginRight: 16 });
});

test('my prop overrides mt prop', () => {
  const styles = space({ mt: 1, my: 2 });

  expect(styles).toEqual({ marginTop: 16, marginBottom: 16 });
});

test('margin overrides m prop', () => {
  const styles = space({ m: 1, margin: 2 });

  expect(styles).toEqual({ margin: 16 });
});

test('handles margin with no theme', () => {
  const styles = space({ mt: 3 });

  expect(styles).toEqual({ marginTop: 24 });
});

test('handles overriding margin/padding shortcut props', () => {
  const styles = space({
    m: 4,
    mx: 3,
    mr: 2,
    p: 4,
    py: 3,
    pt: 2,
  });

  expect(styles).toEqual({
    margin: 32,
    marginLeft: 24,
    marginRight: 16,
    padding: 32,
    paddingBottom: 24,
    paddingTop: 16,
  });
});

test('single directions override axes', () => {
  const styles = space({
    mx: 3,
    ml: 1,
    mr: 2,
    px: 3,
    pl: 1,
    pr: 2,
  });

  expect(styles).toEqual({
    marginLeft: 8,
    marginRight: 16,
    paddingLeft: 8,
    paddingRight: 16,
  });
});

test('supports object values', () => {
  const styles = space({
    m: {
      _: 0,
      0: 1,
      1: 2,
    },
  });

  expect(styles).toEqual({
    margin: 0,
    '@media screen and (min-width: 40em)': {
      margin: 8,
    },
    '@media screen and (min-width: 52em)': {
      margin: 16,
    },
  });
});

test('supports non-array breakpoints', () => {
  const theme = {
    disableStyledSystemCache: true,
    breakpoints: { small: '40em', medium: '52em' },
  };

  const styles = space({
    theme,
    p: {
      small: 2,
    },
    m: {
      _: 0,
      small: 1,
      medium: 2,
    },
  });

  expect(styles).toEqual({
    margin: 0,
    '@media screen and (min-width: 40em)': {
      margin: 8,
      padding: 16,
    },
    '@media screen and (min-width: 52em)': {
      margin: 16,
    },
  });
});
