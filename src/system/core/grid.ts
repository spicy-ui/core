import * as CSS from 'csstype';
import {
  compose,
  Config,
  grid as _grid,
  GridProps as _GridProps,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  TLengthStyledSystem,
} from 'styled-system';

export interface GridProps<ThemeType extends Theme = RequiredTheme> extends _GridProps<ThemeType> {
  /**
   * The `gap` CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
   */
  gap?: ResponsiveValue<CSS.Property.Gap<TLengthStyledSystem>, ThemeType>;
  /**
   * The `row-gap` CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
   */
  rowGap?: ResponsiveValue<CSS.Property.RowGap<TLengthStyledSystem>, ThemeType>;
  /**
   * The `column-gap` CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
   */
  columnGap?: ResponsiveValue<CSS.Property.ColumnGap<TLengthStyledSystem>, ThemeType>;
}

const config: Config = {
  gap: {
    property: 'gap',
    scale: 'space',
  },
  rowGap: {
    property: 'rowGap',
    scale: 'space',
  },
  columnGap: {
    property: 'columnGap',
    scale: 'space',
  },
};

export const grid = compose(_grid, system(config));

export const gridProps = ['gap', 'rowGap', 'columnGap'];
